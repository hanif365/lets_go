import HeroSection from "@/components/HeroSection/HeroSection";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-48 2xl:pt-60">
      <HeroSection />
      <UpcomingEvents />
    </main>
  );
}
