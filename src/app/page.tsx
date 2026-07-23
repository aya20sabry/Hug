import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
// import MobileApp from "@/components/landing/App-sec";

// الأقسام اللي تحت الطية بتتحمل Lazy لتحسين الأداء (تقليل حجم الـ initial JS bundle)
const Services = dynamic(() => import("@/components/landing/Services"));
const MobileApp = dynamic(() => import("@/components/landing/App-sec"));
const Dashboard = dynamic(() => import("@/components/landing/Dashboard"));
const Footer = dynamic(() => import("@/components/landing/Footer"));

export default function LandingPage() {
  return (
    <main className="bg-[#F8F4EA]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MobileApp />
      <Dashboard />
      <Footer />
    </main>
  );
}
