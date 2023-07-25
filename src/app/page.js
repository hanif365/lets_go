import AboutUs from "@/components/AboutUs/AboutUs";
import Faq from "@/components/Faq/Faq";
import HeroSection from "@/components/HeroSection/HeroSection";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Thumbnails from "@/components/Thumbnails/Thumbnails";
import Test from "@/components/UpcomingEvents/Test";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-48 2xl:pt-60">
      <HeroSection />
      <UpcomingEvents />
      <Test />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Thumbnails />
      <PhotoGallery />
    </main>
  );
}
