const footerLinks = [
  { label: "Email", href: "mailto:tiaan@unfilteredventures.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tiaan-saayman" },
  { label: "GitHub", href: "https://github.com/unfilteredventures" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="wrapper flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <div>
          <p className="text-slate-200">
            © {new Date().getFullYear()} Unfiltered Ventures. Crafted in George,
            South Africa.
          </p>
          <p className="mt-1">
            Available for project-based collaborations and long-term retainers.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-slate-300">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
