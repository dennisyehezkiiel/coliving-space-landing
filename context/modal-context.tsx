"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { BookingModal } from "@/components/modals/BookingModal";
import { TourModal } from "@/components/modals/TourModal";

type ModalState =
  | { type: "none" }
  | { type: "booking"; room?: string }
  | { type: "tour"; room?: string };

type ModalContextValue = {
  openBooking: (room?: string) => void;
  openTour: (room?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>({ type: "none" });

  const openBooking = useCallback(
    (room?: string) => setState({ type: "booking", room }),
    []
  );
  const openTour = useCallback(
    (room?: string) => setState({ type: "tour", room }),
    []
  );
  const close = useCallback(() => setState({ type: "none" }), []);

  const value = useMemo(
    () => ({ openBooking, openTour, close }),
    [openBooking, openTour, close]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <BookingModal
        open={state.type === "booking"}
        room={state.type === "booking" ? state.room : undefined}
        onClose={close}
      />
      <TourModal
        open={state.type === "tour"}
        room={state.type === "tour" ? state.room : undefined}
        onClose={close}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
