import Image from "next/image";

const values = [
  {
    title: "Strategy first",
    description:
      "We define success metrics, craft user journeys, and align the build with your go-to-market goals before writing code.",
  },
  {
    title: "Design with intent",
    description:
      "Clean layouts, accessible typography, and purposeful motion ensure every interface feels polished and trustworthy.",
  },
  {
    title: "Ship & learn",
    description:
      "Short feedback loops, transparent reporting, and instrumentation help us iterate quickly without sacrificing quality.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="wrapper resume-card">
        <div className="relative flex justify-center">
          <div className="absolute -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/logo_concept_29.png"
              alt="Portrait of Tiaan Saayman"
              width={420}
              height={480}
              className="h-full w-full rounded-[26px] object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <span className="eyebrow">Founder · Lead developer</span>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Hi, I&apos;m Tiaan Saayman. I help growing brands build digital
              experiences that feel effortless.
            </h2>
            <p className="text-base text-slate-300 md:text-lg">
              Before launching Unfiltered Ventures, I spent years refining
              e-commerce funnels and launch sites for South African businesses.
              Today I consult with founders, marketers, and creative teams that
              need the dependability of an in-house developer without the hiring
              overhead.
            </p>
            <p className="text-base text-slate-300/90">
              From planning to deployment, I own the full lifecycle: discovery,
              prototyping, production builds, and post-launch optimisation. We
              move in focused sprints, communicate openly, and ship on schedule.
            </p>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

              className="h-full w-full rounded-[26px] object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <span className="eyebrow">Founder · Lead developer</span>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
              Hi, I&apos;m Tiaan Saayman. I help growing brands build digital
              experiences that feel effortless.
            </h2>
            <p className="text-base text-slate-300 md:text-lg">
              Before launching Unfiltered Ventures, I spent years refining
              e-commerce funnels and launch sites for South African businesses.
              Today I consult with founders, marketers, and creative teams that
              need the dependability of an in-house developer—without the hiring
              overhead.
            </p>
            <p className="text-base text-slate-300/90">
              From planning to deployment, I own the full lifecycle: discovery,
              prototyping, production builds, and post-launch optimisation. We
              move in focused sprints, communicate openly, and ship on schedule.
            </p>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
