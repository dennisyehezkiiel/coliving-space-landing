export type RoomTag = "balcony" | "private-bathroom" | "workstation";

export type Room = {
  id: string;
  name: string;
  tier: string;
  price: number;
  size: string;
  tags: RoomTag[];
  badges: string[];
  image: string;
  featured?: boolean;
};

export const roomTagLabels: Record<RoomTag, string> = {
  balcony: "Balcony",
  "private-bathroom": "Private Bathroom",
  workstation: "Workstation Ready",
};

export const rooms: Room[] = [
   {
    id: "studio-teras",
    name: "Studio Teras",
    tier: "Deluxe Balcony",
    price: 4750000,
    size: "18 m²",
    tags: ["balcony", "private-bathroom"],
    badges: ["AC", "High-speed Wi-Fi", "Private Bath"],
    image: "https://picsum.photos/seed/kanaya-studio-teras/900/700",
  },
   {
    id: "studio-teras",
    name: "Studio Teras",
    tier: "Deluxe Balcony",
    price: 4750000,
    size: "18 m²",
    tags: ["balcony", "private-bathroom"],
    badges: ["AC", "High-speed Wi-Fi", "Private Bath"],
    image: "https://picsum.photos/seed/kanaya-suite-panorama/1200/900",
  },
  {
    id: "studio-teras",
    name: "Studio Teras",
    tier: "Deluxe Balcony",
    price: 4750000,
    size: "18 m²",
    tags: ["balcony", "private-bathroom"],
    badges: ["AC", "High-speed Wi-Fi", "Private Bath"],
    image: "https://picsum.photos/seed/kanaya-studio-teras/900/700",
  },
  {
    id: "kamar-klasik-balkon",
    name: "Kamar Klasik Balkon",
    tier: "Deluxe Balcony",
    price: 4400000,
    size: "16 m²",
    tags: ["balcony", "workstation"],
    badges: ["AC", "High-speed Wi-Fi", "Study Desk"],
    image: "https://picsum.photos/seed/kanaya-klasik-balkon/900/700",
  },
  {
    id: "studio-inti",
    name: "Studio Inti",
    tier: "Standard Studio",
    price: 3450000,
    size: "14 m²",
    tags: ["workstation"],
    badges: ["AC", "High-speed Wi-Fi", "Study Desk"],
    image: "https://picsum.photos/seed/kanaya-studio-inti/900/700",
  },
  {
    id: "suite-eksekutif",
    name: "Suite Eksekutif",
    tier: "Executive Suite",
    price: 5900000,
    size: "22 m²",
    tags: ["balcony", "private-bathroom", "workstation"],
    badges: ["AC", "High-speed Wi-Fi", "Private Bath"],
    image: "https://picsum.photos/seed/kanaya-suite-eksekutif/900/700",
  },
];
