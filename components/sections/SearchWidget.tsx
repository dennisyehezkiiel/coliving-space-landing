"use client";

import { CalendarDays, Home, Search, Timer } from "lucide-react";
import { useState } from "react";

export function SearchWidget() {
  const [roomType, setRoomType] = useState("any");
  const [moveIn, setMoveIn] = useState("");
  const [duration, setDuration] = useState<"monthly" | "yearly">("monthly");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    document.getElementById("rooms")?.scrollIntoView({ block: "start" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mx-4 -mb-16 rounded-2xl border border-white/60 bg-white/75 p-4 shadow-xl shadow-charcoal/10 backdrop-blur-lg sm:mx-6 sm:p-5 lg:mx-auto lg:-mb-20 lg:max-w-[76rem] lg:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end">
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-soft">
            <Home size={14} strokeWidth={1.75} /> Room type
          </span>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-charcoal outline-none focus:border-terracotta"
          >
            <option value="any">Any room type</option>
            <option value="standard">Standard Studio</option>
            <option value="deluxe">Deluxe Balcony</option>
            <option value="executive">Executive Suite</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-soft">
            <CalendarDays size={14} strokeWidth={1.75} /> Move-in date
          </span>
          <input
            type="date"
            value={moveIn}
            onChange={(e) => setMoveIn(e.target.value)}
            className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-charcoal outline-none focus:border-terracotta"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-soft">
            <Timer size={14} strokeWidth={1.75} /> Duration
          </span>
          <div className="flex h-11 rounded-xl border border-line bg-white p-1 text-sm">
            <button
              type="button"
              onClick={() => setDuration("monthly")}
              className={`flex-1 rounded-lg font-medium transition-colors ${
                duration === "monthly"
                  ? "bg-terracotta-soft text-terracotta-dark"
                  : "text-charcoal-soft"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setDuration("yearly")}
              className={`flex-1 rounded-lg font-medium transition-colors ${
                duration === "yearly"
                  ? "bg-terracotta-soft text-terracotta-dark"
                  : "text-charcoal-soft"
              }`}
            >
              Yearly
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-charcoal px-5 text-sm font-semibold text-cream transition-colors hover:bg-charcoal/90 sm:col-span-2 lg:col-span-1 cursor-pointer"
        >
          <Search size={16} strokeWidth={2} />
          Search
        </button>
      </div>
    </form>
  );
}
