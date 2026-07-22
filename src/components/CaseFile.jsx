import { useRef, useState } from 'react'
import gsap from 'gsap'

export default function CaseFile({ file, index }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)
  const chevronRef = useRef(null)

  const toggle = () => {
    const next = !open
    setOpen(next)

    gsap.to(bodyRef.current, {
      height: next ? 'auto' : 0,
      duration: 0.5,
      ease: 'power3.inOut',
    })
    gsap.to(chevronRef.current, {
      rotate: next ? 45 : 0,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }

  return (
    <div
      data-reveal
      className="group border-b border-paper/10 py-8 md:py-10"
    >
      <button
        type="button"
        onClick={toggle}
        data-cursor={open ? 'Close' : 'Open'}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
          <span className="font-mono text-xs text-gold">
            {file.id} · {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-display text-2xl font-medium text-paper md:text-3xl">
              {file.role}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
              {file.org} — {file.period}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <span
            className={`font-mono text-[10px] uppercase tracking-widest ${
              file.status === 'ACTIVE' ? 'text-signal' : 'text-muted'
            }`}
          >
            {file.status}
          </span>
          <span
            ref={chevronRef}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/20 font-display text-lg text-paper"
          >
            +
          </span>
        </div>
      </button>

      <div ref={bodyRef} className="h-0 overflow-hidden">
        <ul className="ml-0 mt-6 flex flex-col gap-3 pl-0 md:ml-24 md:pl-8">
          {file.duties.map((duty) => (
            <li
              key={duty}
              className="flex gap-3 font-body text-sm leading-relaxed text-paper/70 md:text-base"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
