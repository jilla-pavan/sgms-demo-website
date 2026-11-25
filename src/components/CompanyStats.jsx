import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { site } from '../data/siteData'
function Count({ value, suffix }) {
  const ref = useRef(null); const seen = useInView(ref, { once: true })
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    if (!seen || !ref.current) return
    if (reducedMotion) { ref.current.textContent = value + suffix; return }
    const c = animate(0, value, { duration: 1.5, ease: [.22, 1, .36, 1], onUpdate: v => { if (ref.current) ref.current.textContent = Math.round(v) + suffix } })
    return () => c.stop()
  }, [seen, value, suffix, reducedMotion])
  return <span ref={ref}>{value}{suffix}</span>
}
export default function CompanyStats() {
  return (
    <section aria-label="Company experience" className="bg-moss text-ink py-16 md:py-24">
      <div className="mx-auto grid max-w-[1300px] px-5 md:grid-cols-2 md:px-10">
        {site.stats.map((s, index) => (
          <div key={s.label} className={`flex flex-col items-center border-t border-ink/20 py-10 text-center md:py-8 ${index > 0 ? 'md:border-l md:border-ink/20' : ''}`}>
            <p className="h-display text-[clamp(4.5rem,10vw,9rem)] leading-none text-ink"><Count value={s.value} suffix={s.suffix} /></p>
            <p className="label mt-4 text-ink/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
