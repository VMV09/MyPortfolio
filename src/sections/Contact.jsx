import {
  Trophy,
  BookOpen,
  Code2,
  Users,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishruth.mv@gmail.com",
    href: "mailto:vishruth.mv@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9380924094",
    href: "tel:+919380924094",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
];

export const Contact = () => {

  const impactMetrics = [
    {
      icon: Trophy,
      label: "Hackathons & Competitions",
      value: "5+",
      description: "National & inter-college level participations with wins",
    },
    {
      icon: BookOpen,
      label: "Research & Publications",
      value: "2",
      description: "AI/ML review & research papers in progress",
    },
    {
      icon: Code2,
      label: "Projects Built",
      value: "15+",
      description: "Full-stack, ML, systems & data-driven applications",
    },
    {
      icon: Users,
      label: "Leadership & Mentorship",
      value: "30+",
      description: "Students mentored via clubs, MUN & tech initiatives",
    },
    {
      icon: GitBranch,
      label: "Production Repositories",
      value: "10+",
      description: "Actively maintained projects with CI/CD pipelines",
    },
    {
      icon: ShieldCheck,
      label: "Domains Explored",
      value: "AI • Security • Systems",
      description: "Healthcare, education, networks & cybersecurity",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        {/* Impact Metrics and Contact Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-secondary-foreground">
            Impact Metrics
          </h3>
          <p className="text-muted-foreground mb-8">
            A snapshot of my work across engineering, research, and leadership - measured by outcomes, not intentions.
          </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex gap-4 p-5 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>

              <div>
                <div className="text-2xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-secondary-foreground">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
