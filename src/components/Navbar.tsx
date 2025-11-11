import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="wrapper flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo_concept_29.png"
            alt="Unfiltered Ventures Logo"
            width={40}
            height={40}
            priority
            className="rounded-full ring-1 ring-white/20 transition group-hover:ring-cyan-300/60"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/90">
            Unfiltered Ventures
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}

              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="primary-btn hidden md:inline-flex">
          Start a project
        </Link>

        <Link href="#contact" className="secondary-btn md:hidden">
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}
