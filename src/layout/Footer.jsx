import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/VMV09", label: "GitHub", color: "var(--google-blue)" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishruth-mv-4482a11b6", label: "LinkedIn", color: "var(--google-blue)" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-container !py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-google-blue to-transparent opacity-30" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-4 text-center md:text-left">
          <a href="#" className="text-3xl font-bold tracking-tighter hover:scale-105 transition-smooth inline-block">
            VMV<span className="text-google-blue">.</span>
          </a>
        </div>


        <div className="text-center md:text-right space-y-4">
          <p className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">
            &copy; {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};




