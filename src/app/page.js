import AboutUs from "@/components/AboutUs/AboutUs";
import Faq from "@/components/Faq/Faq";
import HeroSection from "@/components/HeroSection/HeroSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Thumbnails from "@/components/Thumbnails/Thumbnails";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-48 2xl:pt-60">
      <HeroSection />
      <UpcomingEvents />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Thumbnails />
    </main>
  );
}