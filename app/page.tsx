import { ModalProvider } from "@/context/modal-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { RoomShowcase } from "@/components/sections/RoomShowcase";
import { Amenities } from "@/components/sections/Amenities";
import { LocationExplorer } from "@/components/sections/LocationExplorer";
import { PricingBooking } from "@/components/sections/PricingBooking";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RoomShowcase />
        <Amenities />
        <LocationExplorer />
        <PricingBooking />
        <Testimonials />
        <FAQAccordion />
      </main>
      <Footer />
    </ModalProvider>
  );
}
