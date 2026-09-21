import type { LucideIcon } from "lucide-react";
import { GraduationCap, TrainFront, Coffee, ShoppingBag } from "lucide-react";

export type LandmarkCategory = "Universities" | "Public Transit" | "Cafes & Dining" | "Malls/Supermarkets";

export type Landmark = {
  name: string;
  category: LandmarkCategory;
  distance: string;
  mode: "walk" | "drive";
};

export const landmarkCategories: { key: LandmarkCategory; icon: LucideIcon }[] = [
  { key: "Universities", icon: GraduationCap },
  { key: "Public Transit", icon: TrainFront },
  { key: "Cafes & Dining", icon: Coffee },
  { key: "Malls/Supermarkets", icon: ShoppingBag },
];

export const landmarks: Landmark[] = [
  { name: "Universitas Al-Azhar Indonesia", category: "Universities", distance: "9 mins walk", mode: "walk" },
  { name: "Universitas Pancasila", category: "Universities", distance: "12 mins drive", mode: "drive" },
  { name: "Politeknik Negeri Jakarta (Extension)", category: "Universities", distance: "15 mins drive", mode: "drive" },
  { name: "Fatmawati MRT Station", category: "Public Transit", distance: "6 mins walk", mode: "walk" },
  { name: "TransJakarta Fatmawati Corridor", category: "Public Transit", distance: "4 mins walk", mode: "walk" },
  { name: "Cipete Raya MRT Station", category: "Public Transit", distance: "14 mins drive", mode: "drive" },
  { name: "Union Fatmawati", category: "Cafes & Dining", distance: "5 mins walk", mode: "walk" },
  { name: "Kopi Kenangan Fatmawati", category: "Cafes & Dining", distance: "3 mins walk", mode: "walk" },
  { name: "Warung Tegal Bu Yanti", category: "Cafes & Dining", distance: "2 mins walk", mode: "walk" },
  { name: "Lippo Mall Kemang", category: "Malls/Supermarkets", distance: "11 mins drive", mode: "drive" },
  { name: "Transmart Cilandak", category: "Malls/Supermarkets", distance: "8 mins drive", mode: "drive" },
  { name: "Indomaret Fatmawati Raya", category: "Malls/Supermarkets", distance: "3 mins walk", mode: "walk" },
];
