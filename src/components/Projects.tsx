import Link from "next/link";

type Project = {
  title: string;
  description: string;
  result: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "TrueSelf GiveBack Campaign",
    description:
      "Crafted a responsive marketing experience for a philanthropic campaign, including an animated hero, interactive form flow, and automated lead routing.",
    result: "↑ 42% entry completion rate in the first launch month",
    stack: ["React", "Framer Motion", "Supabase", "Tailwind CSS"],
    liveUrl: "https://trueselfgiveback.com",
  },
  {
    title: "Teachers Cambodia Automation",
    description:
      "Delivered a modular landing page and onboarding flow for education partners. Integrated serverless automation to sync GoDaddy domains with CRM records.",
    result: "Enabled same-day onboarding with automated DNS validation",
    stack: ["Next.js", "TypeScript", "Node.js", "GoDaddy API"],
    githubUrl: "https://github.com/unfilteredventures/teachers-cambodia",
  },
  {
    title: "E‑Commerce Starter Kit",
    description:
      "Built a customizable storefront with product management, PayFast checkout, and real-time inventory syncing for growing lifestyle brands.",
    result: "Launched MVP in 10 days with reusable component system",
    stack: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://unfilteredventures.com/demo-store",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="wrapper space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-50 md:text-5xl">
            Projects launched with measurable impact
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Each engagement balances thoughtful interface design with
            engineering rigour. Here are a few favourites from the past year.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-card flex h-full flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full border-b border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/50 to-slate-900/80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                  <p className="text-sm font-semibold text-cyan-200">
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="primary-btn px-6 py-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live site
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="secondary-btn px-6 py-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
