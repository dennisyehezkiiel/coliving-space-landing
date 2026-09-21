"use client";

import { Compass, PlayCircle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/context/modal-context";

export function TourModal({
  open,
  room,
  onClose,
}: {
  open: boolean;
  room?: string;
  onClose: () => void;
}) {
  const { openBooking } = useModal();

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={room ? `${room}: 360 tour` : "360 virtual tour"}
      widthClass="max-w-2xl"
    >
      <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-charcoal/80 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
        <PlayCircle size={56} strokeWidth={1.25} className="relative text-white/90" />
        <p className="relative mt-3 text-sm font-medium text-white/80">
          Interactive panorama preview
        </p>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-cream-alt p-4">
        <Compass size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-terracotta" />
        <p className="text-sm text-charcoal-soft">
          This room&rsquo;s full 360 walkthrough is being captured this week. In
          the meantime, our team can walk you through it live on a video
          call, or in person.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
        <Button
          className="flex-1"
          onClick={() => {
            onClose();
            openBooking(room);
          }}
        >
          Book a Tour Instead
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
