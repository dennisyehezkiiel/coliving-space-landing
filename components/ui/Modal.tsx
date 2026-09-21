"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export function Modal({
  open,
  onClose,
  title,
  children,
  widthClass = "max-w-lg",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  widthClass?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        aria-label="Close dialog"
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative w-full ${widthClass} max-h-[88vh] overflow-y-auto rounded-3xl border border-line bg-cream p-6 shadow-2xl shadow-charcoal/20 outline-none sm:p-8 animate-[modal-in_0.25s_cubic-bezier(0.16,1,0.3,1)]`}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-xl font-bold text-charcoal">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-charcoal-soft transition-colors hover:bg-charcoal/5 hover:text-charcoal"
          >
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
