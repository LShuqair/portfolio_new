import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-fade]', {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
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
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-[80vh] flex-col justify-between border-t border-paper/10 px-6 py-16 md:px-10"
    >
      <div className="flex flex-1 flex-col justify-center">
        <span data-fade className="font-mono text-xs uppercase tracking-widest text-gold">
          Record 005 — Contact
        </span>
        <a
          data-fade
          data-cursor="Email"
          href={`mailto:${profile.email}`}
          className="mt-6 font-display text-[12vw] font-medium leading-none text-paper transition-colors hover:text-gold md:text-[6vw]"
        >
          Let&rsquo;s talk.
        </a>
        <div data-fade className="mt-10 flex flex-col gap-2 font-mono text-sm text-paper/70 md:flex-row md:gap-8">
          <a
            href={`mailto:${profile.email}`}
            data-cursor="Email"
            className="hover:text-gold"
          >
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} data-cursor="Call" className="hover:text-gold">
            {profile.phone}
          </a>
        </div>
      </div>

      <div
        data-fade
        className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-muted md:flex-row md:items-center md:justify-between"
      >
        <span>{profile.name} © {new Date().getFullYear()}</span>
        <span>Clearance: {profile.clearance} — {profile.status}</span>
      </div>
    </section>
  )
}
