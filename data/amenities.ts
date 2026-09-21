import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Wifi,
  Sparkles,
  UtensilsCrossed,
  WashingMachine,
  Building2,
} from "lucide-react";

export type Amenity = {
  icon: LucideIcon;
  title: string;
  description: string;
  photo?: boolean;
};

export const amenities: Amenity[] = [
  {
    icon: ShieldCheck,
    title: "24/7 Security & Smart Lock",
    description:
      "Keyless entry, CCTV-covered corridors, and on-site staff through the night.",
  },
  {
    icon: Wifi,
    title: "High-Speed Fiber Internet",
    description: "Dedicated 100 Mbps fiber in every room, no data caps.",
  },
  {
    icon: Sparkles,
    title: "Weekly Cleaning Service",
    description: "Room cleaning and linen change once a week, included in rent.",
  },
  {
    icon: UtensilsCrossed,
    title: "Communal Kitchen & Lounge",
    description: "Shared kitchen on every floor plus a ground-floor lounge to unwind.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Room",
    description: "Coin-free washer and dryer access, open around the clock.",
  },
  {
    icon: Building2,
    title: "Rooftop & Coworking Space",
    description:
      "A rooftop deck for evenings and a quiet coworking floor for deep work.",
    photo: true,
  },
];
