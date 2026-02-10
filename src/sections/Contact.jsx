import { Mail, Phone, MapPin, Send, Copy, Check, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import { SpotlightCard } from "@/components/SpotlightCard";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishruth.mv@gmail.com",
    href: "mailto:vishruth.mv@gmail.com",
    color: "var(--google-blue)"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9380924094",
    href: "tel:+919380924094",
    color: "var(--google-green)"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "#",
    color: "var(--google-red)"
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("vishruth.mv@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulate API call
  };

  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-google-blue/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-google-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-google-blue" />
            <span className="text-google-blue font-bold tracking-[0.3em] uppercase text-xs">Contact</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Let's <span className="text-google-blue italic">Build</span> Something <span className="text-google-blue italic">Better</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-google-green"></span>
            </span>
            <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">Available for new opportunities</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Left Side - Digital Hub */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-text-primary tracking-tight leading-none group hover:text-google-blue transition-colors">
                Ready to take the <br />
                <span className="text-google-blue">Next Step?</span>
              </h3>
              <p className="text-text-secondary text-lg font-medium leading-relaxed max-w-md">
                Whether you're looking for a technical lead, a system architect,
                or just want to discuss the future of AI, my door is always open.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((item, idx) => (
                <SpotlightCard
                  key={idx}
                  className="!p-6 group hover:translate-x-2 transition-transform duration-300"
                  spotlightColor={`${item.color}15`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl relative"
                        style={{ backgroundColor: `${item.color}10`, color: item.color }}
                      >
                        <item.icon className="w-7 h-7" />
                        <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: item.color }} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        <div className="text-xl font-bold text-text-primary tracking-tight">{item.value}</div>
                      </div>
                    </div>
                    {item.label === "Email" && (
                      <button
                        onClick={copyEmail}
                        className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-white/5 text-text-muted hover:text-google-blue transition-all duration-300 relative"
                      >
                        {copied ? <Check className="w-5 h-5 text-google-green" /> : <Copy className="w-5 h-5" />}
                        {copied && (
                          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-google-green text-white text-[10px] rounded-lg font-black uppercase tracking-widest animate-in fade-in zoom-in slide-in-from-bottom-2">
                            Copied
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Form */}
          <SpotlightCard className="!p-12 border-white/5 relative" spotlightColor="rgba(66, 133, 244, 0.1)">
            <div className="absolute top-8 right-8 text-google-blue opacity-20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-4 text-text-primary focus:outline-none peer transition-all duration-500 focus:border-google-blue text-lg"
                  />
                  <label className="absolute left-0 top-4 text-text-muted transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-google-blue peer-focus:uppercase peer-focus:tracking-[0.2em] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:text-google-blue peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]">
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-google-blue transition-all duration-700 peer-focus:w-full" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-4 text-text-primary focus:outline-none peer transition-all duration-500 focus:border-google-blue text-lg"
                  />
                  <label className="absolute left-0 top-4 text-text-muted transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-google-blue peer-focus:uppercase peer-focus:tracking-[0.2em] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:text-google-blue peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]">
                    Email Address
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-google-blue transition-all duration-700 peer-focus:w-full" />
                </div>

                <div className="relative group">
                  <textarea
                    required
                    placeholder=" "
                    rows="4"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-text-primary focus:outline-none peer resize-none transition-all duration-500 focus:border-google-blue text-lg"
                  ></textarea>
                  <label className="absolute left-0 top-4 text-text-muted transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-google-blue peer-focus:uppercase peer-focus:tracking-[0.2em] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:text-google-blue peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]">
                    Your Message
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-google-blue transition-all duration-700 peer-focus:w-full" />
                </div>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500 hover:bg-google-blue hover:text-white shadow-2xl shadow-google-blue/10 active:scale-95 disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};








