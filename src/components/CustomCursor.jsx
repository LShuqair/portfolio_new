import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// A crosshair "targeting reticle" cursor — nods to the access-control
// theme without leaning on a literal hacker/matrix cliché.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return undefined

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }

    gsap.set(dot, { xPercent: -50, yPercent: -50 })
    gsap.set(ring, { xPercent: -50, yPercent: -50 })
    gsap.set(label, { xPercent: -50, yPercent: -50 })

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.05, ease: 'none' })
    }

    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      gsap.set(ring, { x: ringPos.x, y: ringPos.y })
      gsap.set(label, { x: ringPos.x, y: ringPos.y })
    })

    const setTarget = (targetLabel) => {
      gsap.to(ring, {
        scale: targetLabel ? 2.2 : 1,
        borderColor: targetLabel ? 'var(--gold)' : 'rgba(237,234,225,0.5)',
        duration: 0.3,
        ease: 'power3.out',
      })
      gsap.to(label, {
        opacity: targetLabel ? 1 : 0,
        duration: 0.25,
      })
      if (label) label.textContent = targetLabel || ''
    }

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      setTarget(target ? target.getAttribute('data-cursor') : '')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border border-paper/50 transition-colors"
      />
      <div
        ref={labelRef}
        className="fixed left-0 top-0 whitespace-nowrap pt-6 font-mono text-[10px] uppercase tracking-widest text-gold opacity-0"
      />
    </div>
  )
}
