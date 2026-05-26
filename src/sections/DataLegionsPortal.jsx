import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const dataLegionsUrl = "https://datalegions.netlify.app/";
const descriptors = ["AI Research", "Systems Thinking", "Collaborative Innovation"];

export const DataLegionsPortal = () => (
  <section className="section-container relative !py-10 md:!py-12">
    <motion.a
      href={dataLegionsUrl}
      className="group relative block overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.022] px-5 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.22)] outline-none transition-smooth md:px-8 md:py-10 lg:px-10 lg:py-12"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      aria-label="Open Data Legions collective website"
    >
      {/* One restrained ambient accent gives the affiliation block quiet presence. */}
      <motion.span
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#8aa4bc]/10 blur-3xl"
        animate={{ opacity: [0.34, 0.58, 0.34], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#9cafbf]/70 via-[#9cafbf]/20 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative grid gap-8 md:grid-cols-[1fr_auto_0.85fr] md:items-center lg:gap-10">
        <div className="min-w-0 max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-text-muted/72">
            BUILT ALONGSIDE
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-text-primary/95 md:text-5xl lg:text-[56px]">
              Data Legions
            </h2>
            <motion.span
              className="inline-flex rounded-full border border-[#9cafbf]/20 bg-[#9cafbf]/7 p-2 text-[#c2d0dc]"
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              whileHover={{ x: 4, y: -4 }}
            >
              <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
            </motion.span>
          </div>
        </div>

        <div className="hidden h-28 w-px bg-gradient-to-b from-transparent via-white/[0.14] to-transparent md:block" />

        <div className="space-y-3 md:justify-self-end">
          {descriptors.map((descriptor) => (
            <p
              key={descriptor}
              className="text-lg font-medium leading-snug tracking-tight text-text-secondary/82 md:text-xl"
            >
              {descriptor}
            </p>
          ))}
        </div>
      </div>
    </motion.a>
  </section>
);
