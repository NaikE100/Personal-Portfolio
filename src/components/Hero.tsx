import Link from "next/link";

const stats = [
  { label: "Projects delivered", value: "15+" },
  { label: "Core stack", value: "Next.js · TypeScript" },
  { label: "Response time", value: "<48 hours" },
];

const highlights = [
  "Conversion-focused UX with a clean visual system.",
  "Production-ready codebases with reusable components.",
  "Transparent communication and weekly progress updates.",
];

export default function Hero() {
  return (
    <section id="top" className="relative py-24 md:py-32">
      <div className="wrapper hero-grid">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="eyebrow">Web development partner</span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Transparent builds for ambitious brands that need to ship fast.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              I help founders and marketing teams launch performant websites,
              ecommerce experiences, and product dashboards built on modern web
              standards. Every engagement pairs thoughtful design decisions with
              clean, maintainable code.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="#contact" className="primary-btn">
              Book a discovery call
            </Link>
            <Link href="#projects" className="secondary-btn">
              Explore recent work
            </Link>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="stat-tile">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-50">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="surface-card relative overflow-hidden p-10">
          <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-12 left-6 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative space-y-6">
            <div>
              <span className="eyebrow text-slate-200/70">Process</span>
              <h2 className="mt-4 text-2xl font-semibold text-slate-50">
                What working together looks like
              </h2>
              <p className="mt-3 text-sm text-slate-300/90">
                Every project moves through structured milestones so you stay in
                the loop and your launch dates stay intact.
              </p>
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-200/90">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm text-slate-200/90">
              <p className="font-medium text-slate-100">
                What you get after each sprint:
              </p>
              <ul className="mt-2 space-y-2 text-xs uppercase tracking-[0.16em] text-slate-300/80">
                <li>✅ Loom walkthrough</li>
                <li>✅ Deployment or preview link</li>
                <li>✅ Release notes & next priorities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
