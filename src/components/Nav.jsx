const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#case-files', label: 'Case Files' },
  { href: '#projects', label: 'Projects' },
  { href: '#clearance', label: 'Clearance' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 mix-blend-difference md:px-10 md:py-8">
      <a
        href="#top"
        data-cursor="Home"
        className="font-mono text-xs uppercase tracking-widest text-paper"
      >
        Luna Shuqair
      </a>
      <nav className="hidden gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor="View"
            className="font-mono text-xs uppercase tracking-widest text-paper/80 transition-colors hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        data-cursor="Contact"
        className="font-mono text-xs uppercase tracking-widest text-paper md:hidden"
      >
        Contact
      </a>
    </header>
  )
}
