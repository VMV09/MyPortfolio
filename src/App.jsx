import { useEffect, useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { FlagshipProjects } from "@/sections/FlagshipProjects";

import { DataLegionsPortal } from "@/sections/DataLegionsPortal";
import { Experience } from "@/sections/Experience";

import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Achievements } from "./sections/Achievements";
import { Seminars } from "./sections/Seminars";
import { SocialMedia } from "./sections/SocialMedia";
import { ArrowUp } from "lucide-react";
import { EventDetails } from "@/pages/EventDetails";
import { ProjectDetails } from "@/pages/ProjectDetails";

import Publications from "@/sections/Publications";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [location, setLocation] = useState({
    pathname: window.location.pathname,
    hash: window.location.hash === "#flagship-projects" ? "" : window.location.hash,
  });

  const isEventRoute = location.pathname.startsWith("/events/");
  const eventSlug = isEventRoute ? location.pathname.split("/events/")[1]?.replace(/\/$/, "") : null;
  const isProjectRoute = location.pathname.startsWith("/projects/");
  const projectSlug = isProjectRoute ? location.pathname.split("/projects/")[1]?.replace(/\/$/, "") : null;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.pathname === "/" && window.location.hash === "#flagship-projects") {
      window.history.replaceState({}, "", "/");
      setLocation({ pathname: "/", hash: "" });
    }

    if (window.location.pathname === "/" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

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

    const observeReveals = () => {
      const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      revealElements.forEach((el) => observer.observe(el));
    };

    const revealFrame = window.requestAnimationFrame(observeReveals);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.cancelAnimationFrame(revealFrame);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const navigate = (url) => {
      window.history.pushState({}, "", url);
      setLocation({ pathname: window.location.pathname, hash: window.location.hash });
    };

    const onPopState = () => {
      setLocation({ pathname: window.location.pathname, hash: window.location.hash });
    };

    const onClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.hash}`);
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const target = document.querySelector(location.hash);
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-google-blue/30 selection:text-white relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-9999 mix-blend-overlay bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[4px_4px]" />

      <Navbar />

      {isEventRoute ? (
        <EventDetails slug={eventSlug} />
      ) : isProjectRoute ? (
        <ProjectDetails slug={projectSlug} />
      ) : (
        <main className="animate-page-enter">
          <Hero />
          <div id="about" className="reveal"><About /></div>
          <div id="experience" className="reveal"><Experience /></div>
          <div id="seminars" className="reveal"><Seminars /></div>
          <div id="flagship-projects" className="reveal"><FlagshipProjects /></div>
          <div id="publications" className="reveal"><Publications /></div>
          <div id="data-legions" className="reveal"><DataLegionsPortal /></div>
          <div id="projects" className="reveal"><Projects /></div>
          <div id="achievements" className="reveal"><Achievements /></div>
          <div id="social" className="reveal"><SocialMedia /></div>
          <div id="contact" className="reveal"><Contact /></div>
        </main>
      )}

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

