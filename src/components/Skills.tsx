const categories = [
  {
    title: "Interface & UX",
    description:
      "Atomic design systems, fully responsive layouts, and meaningful micro-interactions that guide users to take action.",
    stack: ["Next.js App Router", "React 18", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Application logic",
    description:
      "Typed APIs, data orchestration, and serverless workflows that stay reliable as your product scales.",
    stack: ["TypeScript", "Node.js", "tRPC / REST", "Prisma"],
  },
  {
    title: "Commerce & growth",
    description:
      "Checkout flows, customer portals, and analytics instrumentation that make revenue operations effortless.",
    stack: ["Shopify Hydrogen", "Stripe", "PayFast", "Supabase"],
  },
];

const tools = [
  "Vercel",
  "Netlify",
  "AWS Amplify",
  "Cloudflare",
  "GitHub Actions",
  "Figma",
  "Storybook",
  "Jira",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="wrapper space-y-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-50 md:text-5xl">
            Full-stack delivery grounded in real-world shipping experience
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            I bring together design systems, product thinking, and dependable
            engineering. Every engagement gets senior-level execution from
            kickoff to handover.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="surface-card p-8 text-left">
              <h3 className="text-xl font-semibold text-slate-50">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {category.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.stack.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="surface-card p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-50">
                Tooling that keeps releases predictable
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Automated deployments, performance monitoring, and shared
                documentation give your team confidence after handoff.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tech-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


