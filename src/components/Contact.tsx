// To make this form functional, you can use services like Netlify Forms,
// Vercel's serverless functions with a mailer service (like Resend or SendGrid),
// or a third-party service like Formspree.

const contactMethods = [
  {
    label: "Email",
    value: "tiaan@unfilteredventures.com",
    href: "mailto:tiaan@unfilteredventures.com",
  },
  {
    label: "WhatsApp",
    value: "+27 62 671 8275",
    href: "https://wa.me/27626718275",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tiaan-saayman",
    href: "https://www.linkedin.com/in/tiaan-saayman",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="wrapper space-y-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Let&apos;s work together</span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-50 md:text-5xl">
            Ready to launch? Tell me about your timeline, scope, and vision.
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Share a few details and I&apos;ll reply within two business days
            with next steps, availability, and an estimated investment range.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:items-start">
          <aside className="surface-card space-y-6 p-8">
            <h3 className="text-xl font-semibold text-slate-50">
              Prefer to reach out directly?
            </h3>
            <p className="text-sm text-slate-300">
              Book a call, drop a note, or send over a Loom. I&apos;ll review the
              context and follow up with a tailored plan.
            </p>
            <ul className="space-y-4 text-sm text-slate-200/90">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {method.label}
                  </span>
                  <a
                    href={method.href}
                    className="mt-1 inline-flex items-center gap-2 text-base text-slate-100 hover:text-cyan-300"
                  >
                    {method.value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-5 text-sm text-slate-100">
              <p className="font-semibold">Typical project ranges</p>
              <p className="mt-1 text-slate-200/80">
                Landing pages start at R8k. Advanced web apps and e-commerce
                builds range from R18k–R60k depending on integrations.
              </p>
            </div>
          </aside>

          <form className="surface-card grid gap-4 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
                Full name
                <input
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
                Email
                <input
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Project type
              <select
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 focus:border-cyan-300 focus:outline-none"
                name="projectType"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Select an option
                </option>
                <option value="website" className="bg-slate-900 text-slate-100">
                  Marketing website
                </option>
                <option value="product" className="bg-slate-900 text-slate-100">
                  SaaS / product interface
                </option>
                <option value="commerce" className="bg-slate-900 text-slate-100">
                  E-commerce experience
                </option>
                <option value="other" className="bg-slate-900 text-slate-100">
                  Something else
                </option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Launch deadline
              <input
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                type="text"
                name="timeline"
                placeholder="e.g. End of Q1 2026"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Project details
              <textarea
                className="h-36 rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                name="message"
                placeholder="What are you building? What does success look like?"
                required
              />
            </label>
            <button type="submit" className="primary-btn self-start">
              Send message
            </button>
            <p className="text-xs text-slate-400">
              I use Resend and Vercel serverless functions for contact form
              handling. Add a Calendly link if you prefer to meet immediately.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

    </section>
  );
}

              <p className="mt-1 text-slate-200/80">
                Landing pages start at R8k. Advanced web apps and e-commerce
                builds range from R18k–R60k depending on integrations.
              </p>
            </div>
          </aside>

          <form className="surface-card grid gap-4 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
                Full name
                <input
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
                Email
                <input
                  className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Project type
              <select
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 focus:border-cyan-300 focus:outline-none"
                name="projectType"
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Select an option
                </option>
                <option value="website" className="bg-slate-900 text-slate-100">
                  Marketing website
                </option>
                <option value="product" className="bg-slate-900 text-slate-100">
                  SaaS / product interface
                </option>
                <option value="commerce" className="bg-slate-900 text-slate-100">
                  E-commerce experience
                </option>
                <option value="other" className="bg-slate-900 text-slate-100">
                  Something else
                </option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Launch deadline
              <input
                className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                type="text"
                name="timeline"
                placeholder="e.g. End of Q1 2026"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200/90">
              Project details
              <textarea
                className="h-36 rounded-xl border border-white/10 bg-transparent px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                name="message"
                placeholder="What are you building? What does success look like?"
                required
              />
            </label>
            <button type="submit" className="primary-btn self-start">
              Send message
            </button>
            <p className="text-xs text-slate-400">
              I use Resend and Vercel serverless functions for contact form
              handling. Add a Calendly link if you prefer to meet immediately.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
