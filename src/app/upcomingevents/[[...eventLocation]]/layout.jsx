import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upcoming Events",
  description: "Go your destination",
};

export default function UpcomingEventsLayout({ children }) {
  return (
    <section>
        {children}
    </section>
  );
}
