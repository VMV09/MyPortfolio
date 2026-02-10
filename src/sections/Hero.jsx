import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState, useEffect } from "react";
import { CardStack } from "../components/CardStack";
import { TextType } from "../components/TextType";

const skills = [
  "Data Structures", "Algorithms", "Python", "C", "SQL", "JavaScript",
  "MySQL", "OOPs", "FastAPI", "Docker", "RESTful APIs", "React",
  "Django", "Tailwind CSS", "Streamlit", "Flask", "Agile", "Git", "GitHub Actions"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-google-blue opacity-[0.15] blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-google-red opacity-[0.1] blur-[150px] rounded-full animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-google-yellow opacity-[0.1] blur-[150px] rounded-full animate-float-reverse" />
        <div className="absolute bottom-[30%] left-[20%] w-[450px] h-[450px] bg-google-green opacity-[0.1] blur-[150px] rounded-full animate-float-slow" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="hero-title animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Hi, I'm Vishruth <br />
                <TextType
                  text={["Software Engineer", "Problem Solver", "Full Stack Dev"]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={1500}
                />
              </h1>
              <div className="text-xl text-text-secondary max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                <TextType
                  text="Specializing in backend development and scalable systems. I turn complex problems into elegant, performant digital solutions."
                  loop={false}
                  cursorCharacter=""
                  typingSpeed={30}
                />
              </div>
            </div>

          </div>

          {/* Right Column - Profile Image (Card Stack) */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <CardStack />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="relative overflow-hidden group">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...skills, ...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-text-secondary/50 hover:text-google-blue transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
