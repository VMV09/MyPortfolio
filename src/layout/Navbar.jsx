import { Button } from "@/components/Button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#seminars", label: "Engagements" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#social", label: "Social" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
        }`}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-google-blue transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="section-container !py-0 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-smooth">
          VMV<span className="text-google-blue">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 border-white/5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  href={link.href}
                  key={index}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-smooth ${isActive
                    ? "bg-google-blue text-white shadow-lg shadow-google-blue/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-smooth group shadow-lg shadow-white/10"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">

          <button
            className="p-2 text-text-primary hover:bg-white/5 rounded-lg transition-colors border-white/5 border"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-text-secondary hover:text-google-blue transition-smooth"
            >
              {link.label}
            </a>
          ))}
          <Button size="lg" className="btn-primary w-full max-w-xs mt-4">
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
};


