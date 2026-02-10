import { useEffect, useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";

import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Achievements } from "./sections/Achievements";
import { Seminars } from "./sections/Seminars";
import { SocialMedia } from "./sections/SocialMedia";
import { ArrowUp } from "lucide-react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-google-blue/30 selection:text-white relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <main>
        <Hero />
        <div id="about" className="reveal"><About /></div>
        <div id="experience" className="reveal"><Experience /></div>
        <div id="seminars" className="reveal"><Seminars /></div>
        <div id="projects" className="reveal"><Projects /></div>
        <div id="achievements" className="reveal"><Achievements /></div>
        <div id="social" className="reveal"><SocialMedia /></div>
        <div id="contact" className="reveal"><Contact /></div>
      </main>

      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-2xl glass border-white/10 text-google-blue shadow-2xl transition-smooth z-50 hover:scale-110 active:scale-95 ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;


