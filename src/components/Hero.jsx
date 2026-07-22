import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import AccessGridScene from './AccessGridScene.jsx'
import { profile } from '../data/content.js'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const badgeRef = useRef(null)
  const scrollCueRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from(badgeRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          headlineRef.current.querySelectorAll('.line span'),
          {
            yPercent: 120,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.08,
          },
          '-=0.2'
        )
        .from(
          subRef.current,
          { autoAlpha: 0, y: 16, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .from(
          scrollCueRef.current,
          { autoAlpha: 0, duration: 0.6 },
          '-=0.3'
        )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24"
    >
      <div className="absolute inset-0">
        <AccessGridScene />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-graphite/60" />
      </div>

      <div className="relative z-10">
        <div
          ref={badgeRef}
          className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Clearance: {profile.clearance} — {profile.status}
        </div>

        <h1
          ref={headlineRef}
          className="max-w-4xl font-display text-[11vw] font-medium leading-[0.95] tracking-tight text-paper md:text-[6.4vw]"
        >
          <span className="line block overflow-hidden">
            <span className="inline-block">Cleared for</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="inline-block">access.</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="inline-block text-outline">
              Built for the interface.
            </span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-8 max-w-md font-body text-sm leading-relaxed text-paper/70 md:text-base"
        >
          {profile.name} — Top Secret cleared technology professional
          working across facility security operations, front-end
          development, and cloud infrastructure.
        </p>
      </div>

      <div
        ref={scrollCueRef}
        className="relative z-10 mt-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted"
      >
        <span className="h-8 w-px bg-muted/60" />
        Scroll to review case files
      </div>
    </section>
  )
}
