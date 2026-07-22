import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const STEPS = [
  'INITIALIZING SESSION',
  'VERIFYING CREDENTIALS',
  'CROSS-CHECKING CLEARANCE',
  'ACCESS GRANTED',
]

export default function Loader({ onComplete }) {
  const rootRef = useRef(null)
  const counterRef = useRef(null)
  const stepRef = useRef(null)
  const barRef = useRef(null)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const counterObj = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete,
        })
      },
    })

    tl.to(counterObj, {
      value: 100,
      duration: 2.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = String(
            Math.floor(counterObj.value)
          ).padStart(3, '0')
        }
        const idx = Math.min(
          STEPS.length - 1,
          Math.floor((counterObj.value / 100) * STEPS.length)
        )
        setStepIndex(idx)
      },
    })

    tl.fromTo(
      barRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.1, ease: 'power2.inOut' },
      '<'
    )

    return () => tl.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!stepRef.current) return
    gsap.fromTo(
      stepRef.current,
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.3 }
    )
  }, [stepIndex])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-graphite"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
          Clearance Terminal
        </span>
        <div
          ref={counterRef}
          className="font-display text-[18vw] font-medium leading-none text-paper md:text-[9vw]"
        >
          000
        </div>
        <div ref={stepRef} className="font-mono text-xs uppercase tracking-widest text-gold">
          {STEPS[stepIndex]}
        </div>
        <div className="mt-4 h-px w-56 overflow-hidden bg-surface2">
          <div
            ref={barRef}
            className="h-full origin-left scale-x-0 bg-gold"
          />
        </div>
      </div>
    </div>
  )
}
