import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kanaya Living | Modern Co-Living in Fatmawati, Jakarta",
  description:
    "Premium co-living rooms in Fatmawati, South Jakarta. Fully furnished studios and suites with fiber internet, weekly cleaning, and a rooftop coworking lounge. Book a tour today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
