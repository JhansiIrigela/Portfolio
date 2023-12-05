import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ProjectsSection from "./projects/page";
import AboutSection from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-serif ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
