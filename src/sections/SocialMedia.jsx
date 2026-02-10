import { Github, Linkedin, Twitter, Instagram, Youtube, Globe, MessageCircle } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const socialLinks = [
    {
        name: "LinkedIn",
        username: "@vishruthmv",
        url: "https://linkedin.com/in/vishruthmv",
        icon: Linkedin,
        color: "#0077B5",
        description: "Professional networking, career updates, and industry insights.",
        stats: "2k+ Followers"
    },
    {
        name: "GitHub",
        username: "vmv09",
        url: "https://github.com/vmv09",
        icon: Github,
        color: "#333",
        description: "Source code for all my projects, open-source contributions, and experiments.",
        stats: "50+ Repos"
    },
    {
        name: "Twitter",
        username: "@vishruth_mv",
        url: "https://twitter.com/vishruth_mv",
        icon: Twitter,
        color: "#1DA1F2",
        description: "Tech takes, daily progress updates, and connecting with the dev community.",
        stats: "Active"
    },
    {
        name: "Instagram",
        username: "@vishruth_mv",
        url: "https://instagram.com/vishruth_mv",
        icon: Instagram,
        color: "#E4405F",
        description: "A glimpse into my life outside of code—travel, photography, and hobbies.",
        stats: "Personal"
    }
];

export const SocialMedia = () => {
    return (
        <section className="section-container relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-google-blue/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-[1px] bg-google-blue" />
                        <span className="text-google-blue font-bold tracking-[0.3em] uppercase text-xs">Connectivity</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Digital <span className="text-text-muted italic">&</span> <span className="text-google-blue">Social</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl text-lg mt-4 font-medium">
                        Let's connect across the digital landscape. Stay updated with my latest work,
                        thoughts, and adventures.
                    </p>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal group block h-full"
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <SpotlightCard
                                className="h-full group hover:shadow-2xl hover:shadow-google-blue/5"
                                spotlightColor={`${social.color}30`}
                            >
                                {/* Icon & Name */}
                                <div className="flex items-center justify-between mb-8">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-2xl"
                                        style={{ backgroundColor: `${social.color}15`, color: social.color }}
                                    >
                                        <social.icon className="w-7 h-7" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] block mb-1">
                                            {social.stats}
                                        </span>

                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2 flex-grow">
                                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-google-blue transition-colors">
                                        {social.name}
                                    </h3>
                                    <p className="text-xs font-bold text-google-blue uppercase tracking-widest">
                                        {social.username}
                                    </p>
                                    <p className="text-text-secondary text-sm leading-relaxed mt-4 font-medium">
                                        {social.description}
                                    </p>
                                </div>

                                {/* Centered Follow Text */}
                                <div className="mt-auto pt-8 flex justify-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted group-hover:text-google-blue transition-colors duration-300">
                                        Connect on {social.name}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </a>
                    ))}
                </div>


            </div>
        </section>
    );
};

