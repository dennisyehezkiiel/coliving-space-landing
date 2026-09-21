"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { rooms } from "@/data/rooms";

export function BookingModal({
  open,
  room,
  onClose,
}: {
  open: boolean;
  room?: string;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} title="Book a visit">
      {open && (
        <BookingForm key={room ?? "any-room"} room={room} onClose={onClose} />
      )}
    </Modal>
  );
}

function BookingForm({
  room,
  onClose,
}: {
  room?: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState(room ?? "");
  const [moveIn, setMoveIn] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <CheckCircle2 size={44} strokeWidth={1.5} className="text-terracotta" />
        <h4 className="mt-4 text-lg font-bold text-charcoal">Request sent</h4>
        <p className="mt-2 max-w-sm text-sm text-charcoal-soft">
          Thanks, {name.split(" ")[0] || "there"}. Our team will reach out on
          WhatsApp within a few hours to confirm your visit.
        </p>
        <Button className="mt-6" onClick={onClose}>
          Done
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-charcoal">Full name</span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dinda Ayu Lestari"
          className="h-11 rounded-xl border border-line bg-white px-3.5 text-sm text-charcoal outline-none placeholder:text-charcoal-soft/60 focus:border-terracotta"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-charcoal">
          Phone / WhatsApp number
        </span>
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+62 812-3456-7890"
          className="h-11 rounded-xl border border-line bg-white px-3.5 text-sm text-charcoal outline-none placeholder:text-charcoal-soft/60 focus:border-terracotta"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-charcoal">Room preference</span>
        <select
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          className="h-11 rounded-xl border border-line bg-white px-3.5 text-sm text-charcoal outline-none focus:border-terracotta"
        >
          <option value="">No preference yet</option>
          {rooms.map((r) => (
            <option key={r.id} value={r.name}>
              {r.name} ({r.tier})
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-charcoal">
          Target move-in date
        </span>
        <input
          required
          type="date"
          value={moveIn}
          onChange={(e) => setMoveIn(e.target.value)}
          className="h-11 rounded-xl border border-line bg-white px-3.5 text-sm text-charcoal outline-none focus:border-terracotta"
        />
      </label>

      <Button type="submit" size="lg" className="mt-2 w-full">
        Send Request
      </Button>
      <p className="text-center text-xs text-charcoal-soft">
        No payment required. We&rsquo;ll confirm your tour slot by WhatsApp.
      </p>
    </form>
  );
}
