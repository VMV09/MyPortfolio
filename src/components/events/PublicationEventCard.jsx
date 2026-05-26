import {
  CalendarDays,
  ExternalLink,
  FileText,
  BookOpen,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function PublicationEventCard({ publication }) {
  return (
    <div className="w-full rounded-[30px] border border-white/10 bg-[#0B0B0C] overflow-hidden hover:border-white/20 transition-all duration-300">

      <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr_1fr]">

        {/* LEFT */}
        <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10">

          <div className="flex gap-6">

            {/* ICON */}
            <div className="w-24 h-24 rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0">
              <BookOpen className="w-10 h-10 text-zinc-300" />
            </div>

            {/* CONTENT */}
            <div className="flex-1">

              <h3 className="text-3xl font-bold text-white leading-tight mb-4 max-w-3xl">
                {publication.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-[15px] mb-6 max-w-3xl">
                {publication.abstract}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3">
                {publication.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center gap-6">

          <div className="flex items-center gap-3 text-zinc-300">
            <CalendarDays size={18} />
            <span>{publication.year}</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <FileText size={18} />
            <span>{publication.type}</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Users size={18} />
            <span>{publication.collaboration}</span>
          </div>

          <div className="flex items-center gap-3 text-blue-400">
            <CheckCircle2 size={18} />
            <span>{publication.status}</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="p-10 flex flex-col justify-center gap-6">

          <a
            href={publication.paperLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-zinc-300 hover:text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <FileText size={18} />
              <span>Paper (PDF)</span>
            </div>

            <ExternalLink size={17} />
          </a>

          <a
            href={publication.publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-zinc-300 hover:text-white transition-all"
          >
            <div className="flex items-center gap-3">
              <Building2 size={18} />
              <span>Publication Link</span>
            </div>

            <ExternalLink size={17} />
          </a>

        </div>

      </div>
    </div>
  );
}