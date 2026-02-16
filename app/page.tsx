import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Dock from "@/components/Dock";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Header />
      <div className="relative">
        <ScrollyCanvas />
      </div>

      <div className="relative">
        <ParticleBackground />
        <div className="relative z-10">
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>

      <Dock />
    </main>
  );
}
