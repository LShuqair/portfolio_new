import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  coreCompetencies,
  technicalSkills,
  education,
  certifications,
} from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Clearance() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-tag]', {
        autoAlpha: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from('[data-panel]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="clearance"
      ref={sectionRef}
      className="relative border-t border-paper/10 px-6 py-28 md:px-10 md:py-40"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-gold">
        Record 004 — Permissions
      </span>
      <h2 className="mt-4 font-display text-4xl font-medium text-paper md:text-6xl">
        Clearance &amp; skills
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-3">
        <div data-panel>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Core competencies
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                data-tag
                className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[11px] text-paper/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div data-panel>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Technical stack
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {technicalSkills.map((item) => (
              <span
                key={item}
                data-tag
                className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 font-mono text-[11px] text-signal"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div data-panel className="flex flex-col gap-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Certifications
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-4 border-b border-paper/10 pb-3"
                >
                  <span className="font-body text-sm text-paper/80">
                    {cert.name}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-[10px] uppercase tracking-widest ${
                      cert.status === 'ACTIVE' ? 'text-gold' : 'text-muted'
                    }`}
                  >
                    {cert.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Education
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {education.map((item) => (
                <li key={item.program} className="font-body text-sm">
                  <span className="block text-paper/80">{item.program}</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {item.school}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
