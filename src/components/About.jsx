import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { about } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-about-reveal]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
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
      id="about"
      ref={sectionRef}
      className="relative border-t border-paper/10 px-6 py-28 md:px-10 md:py-40"
    >
      <span
        data-about-reveal
        className="font-mono text-xs uppercase tracking-widest text-gold"
      >
        Record 001 — Profile
      </span>
      <h2
        data-about-reveal
        className="mt-4 font-display text-4xl font-medium text-paper md:text-6xl"
      >
        About
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-[200px_1fr_1fr] md:gap-12">
        <div data-about-reveal className="relative w-[200px] border border-gold/40 p-2.5">
          <span className="pointer-events-none absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 border-gold" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b-2 border-r-2 border-gold" />
          <img
            src={about.photo}
            alt="Luna Shuqair"
            className="block w-full grayscale contrast-[1.05]"
          />
          <div className="mt-3 text-center">
            <div className="font-mono text-[11px] tracking-wide text-paper">
              L. SHUQAIR
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-signal">
              Clearance · Active
            </div>
          </div>
        </div>

        <p
          data-about-reveal
          className="font-display text-xl font-medium leading-snug text-paper md:text-2xl"
        >
          {about.lede}
        </p>

        <div data-about-reveal className="flex flex-col gap-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="font-body text-sm leading-relaxed text-paper/70 md:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
