import Navbar from "@/components/Shared/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer/Footer";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";
import MyThemeProviders from "@/utils/ThemeProvider";
// import { ContextProvider } from "@/context/ContextProvider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: "Let's Go: Your Ultimate Travel Companion",
  description:
    "Explore, plan, and embark on unforgettable adventures with Let's Go!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans`}>
        <AuthProvider>
          <MyThemeProviders>
            <Navbar />
            {children}
            <Footer />
          </MyThemeProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
