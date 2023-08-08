import AboutUs from "@/components/HomePageComponent/AboutUs/AboutUs";
import Faq from "@/components/HomePageComponent/Faq/Faq";
import HeroSection from "@/components/HomePageComponent/HeroSection/HeroSection";
import PhotoGallery from "@/components/HomePageComponent/PhotoGallery/PhotoGallery";
import Testimonials from "@/components/HomePageComponent/Testimonials/Testimonials";
import Thumbnails from "@/components/HomePageComponent/Thumbnails/Thumbnails";
import UpcomingEvents from "@/components/HomePageComponent/UpcomingEvents/UpcomingEvents";



export default function Home() {
  return (
    <main className="pt-48 2xl:pt-60">
      <HeroSection />
      <UpcomingEvents />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Thumbnails />
      <PhotoGallery />
    </main>
  );
}
