import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23999' fill-opacity='0.15'%3E%3Cpath d='M29 30h2v-2h-2v2zm0-28h2V0h-2v2zm0 56h2v-2h-2v2zM1 30h2v-2H1v2zm56 0h2v-2h-2v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 relative z-10">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Headline */}
          <h1 className="text-[40px] md:text-[64px] lg:text-[80px] font-bold leading-[1.05] tracking-[-0.02em] mb-[250px] font-serif">
            growth + marketing.
          </h1>

          {/* CTA Button with technical corners */}
          <div className="inline-block relative">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#ccc]" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#ccc]" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#ccc]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#ccc]" />

            <Link
              href="mailto:hello@anyphase.com"
              className="inline-flex items-center gap-3 bg-transparent border border-[#ddd] text-black font-mono text-base px-8 py-4 hover:border-[#999] transition-colors"
            >
              Get in touch
              <span className="w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded">
                ✉
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* Logos section */}
      <section className="relative z-10 pb-20 px-6 w-full flex flex-col items-center">
        <div className="w-full max-w-[900px] text-center">
          <p className="text-sm text-[#999] mb-8">
            Trusted by founders and execs from
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-8">
            {/* Y Combinator */}
            <img
              src="/Y_Combinator_logo.svg"
              alt="Y Combinator"
              className="h-14 opacity-80"
            />

            {/* Andreessen Horowitz */}
            <div className="flex flex-col items-center leading-tight opacity-70 h-14 justify-center">
              <span className="text-[16px] tracking-[0.12em]" style={{ fontFamily: 'Georgia, serif' }}>ANDREESSEN</span>
              <span className="text-[16px] tracking-[0.12em]" style={{ fontFamily: 'Georgia, serif' }}>HOROWITZ</span>
            </div>

            {/* Susa Ventures */}
            <img
              src="/susa-logo.png"
              alt="Susa Ventures"
              className="h-14 opacity-80"
            />

            {/* Harvard Business School */}
            <img
              src="/HBS-styleguide-primary-logo-3.png"
              alt="Harvard Business School"
              className="h-14 opacity-80"
            />

            {/* Stanford University */}
            <img
              src="/Stanford-University-Logo.png"
              alt="Stanford University"
              className="h-14 opacity-80"
            />

            {/* Sperm Racing */}
            <img
              src="/sperm-racing-logo.png?v=2"
              alt="Sperm Racing"
              className="h-14 opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
