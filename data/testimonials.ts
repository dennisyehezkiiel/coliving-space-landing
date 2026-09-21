export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dinda Ayu Lestari",
    role: "UX Designer, remote for a Singapore studio",
    quote:
      "The rooftop is where I actually do my best thinking. Fast Wi-Fi in the room too, which matters more than I expected.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Raka Pratama Wijaya",
    role: "3rd year student, Universitas Al-Azhar Indonesia",
    quote:
      "Nine minutes to campus on foot and the security team knows everyone by name. My parents worry a lot less now.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Michelle Tanuwijaya",
    role: "Associate consultant",
    quote:
      "Weekly cleaning sounds small until you live without it. Between that and the laundry room, I got hours back every week.",
    rating: 4,
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "Farhan Aditya Nugroho",
    role: "Backend engineer",
    quote:
      "Moved from a much cheaper kos and the difference in sleep quality alone was worth it. Quiet building, solid AC.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=53",
  },
];
