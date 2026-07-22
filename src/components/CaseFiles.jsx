import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CaseFile from './CaseFile.jsx'
import { caseFiles } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function CaseFiles() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll('[data-reveal]')
      items.forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        })
      })

      gsap.from('[data-heading]', {
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
      id="case-files"
      ref={sectionRef}
      className="relative px-6 py-28 md:px-10 md:py-40"
    >
      <div
        data-heading
        className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-gold">
            Record 002 — Employment History
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-paper md:text-6xl">
            Case files
          </h2>
        </div>
        <p className="max-w-xs font-body text-sm text-paper/60">
          Three engagements spanning secure facility operations, freelance
          development, and civic-sector web work.
        </p>
      </div>

      <div>
        {caseFiles.map((file, index) => (
          <CaseFile key={file.id} file={file} index={index} />
        ))}
      </div>
    </section>
  )
}
