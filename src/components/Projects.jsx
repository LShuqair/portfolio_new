import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll('[data-project-reveal]')
      rows.forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 36,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
        })
      })

      gsap.from('[data-project-heading]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative border-t border-paper/10 px-6 py-28 md:px-10 md:py-40"
    >
      <div data-project-heading>
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          Record 003 — Selected builds
        </span>
        <h2 className="mt-4 font-display text-4xl font-medium text-paper md:text-6xl">
          Projects
        </h2>
      </div>

      <div className="mt-16 md:mt-24">
        {projects.map((project) => (
          <div
            key={project.id}
            data-project-reveal
            className="grid grid-cols-1 gap-6 border-t border-paper/10 py-8 last:border-b md:grid-cols-[90px_1fr_220px] md:gap-8 md:py-10"
          >
            <span className="font-mono text-xs text-gold">{project.id}</span>

            <div>
              <h3 className="font-display text-2xl font-medium text-paper md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-signal">
                {project.role}
              </p>
              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-paper/65 md:text-base">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-paper/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row gap-6 pt-1 md:flex-col md:gap-2.5">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="View"
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-paper transition-colors hover:text-gold"
              >
                Live app <span aria-hidden="true">↗</span>
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Code"
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-paper/70 transition-colors hover:text-gold"
              >
                Source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
