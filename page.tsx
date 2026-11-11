import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About, { Intro } from "@/components/About";
import Pillars from "@/components/Pillars";
import Board from "@/components/Board";
import Hub from "@/components/Hub";
import Alumni from "@/components/Alumni";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Hero />
        <Intro />
        <About />
        <Pillars />
        <Board />
        <Hub />
        <Alumni />
        <Faq />
        <Footer />
      </div>
      <Reveal />
    </>
  );
}
