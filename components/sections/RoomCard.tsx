import Image from "next/image";
import { Video } from "lucide-react";
import type { Room } from "@/data/rooms";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function RoomCard({
  room,
  featured = false,
  onBook,
  onTour,
}: {
  room: Room;
  featured?: boolean;
  onBook: () => void;
  onTour: () => void;
}) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-charcoal/10 ${
        featured ? "sm:col-span-2 sm:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/10] sm:aspect-auto sm:w-1/2" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={room.image}
          alt={`${room.name}, a ${room.tier.toLowerCase()} at Kanaya Living`}
          fill
          sizes={featured ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-charcoal backdrop-blur-sm">
          {room.tier}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold text-charcoal">{room.name}</h3>
            <span className="text-xs text-charcoal-soft">{room.size}</span>
          </div>
          <p className="mt-1 text-lg font-bold text-terracotta">
            {formatPrice(room.price)}
            <span className="text-sm font-medium text-charcoal-soft">/month</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {room.badges.map((badge) => (
            <Badge key={badge} tone="charcoal">
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2.5 pt-1 sm:flex-row">
          <Button size="md" className="flex-1" onClick={onTour}>
            <Video size={16} strokeWidth={1.75} />
            View Details & 360 Tour
          </Button>
          <Button variant="secondary" size="md" onClick={onBook}>
            Inquire
          </Button>
        </div>
      </div>
    </article>
  );
}
