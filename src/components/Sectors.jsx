import Img from './Img'
import { img } from '../data/siteData'
const items = [
  { k: 'residential', t: 'Residential interiors', d: 'Functional layouts and carefully executed detail, shaped around how a household actually lives.' },
  { k: 'hospitality', t: 'Hospitality interiors', d: 'Planning, materials and execution that make hospitality spaces attractive and practical to run.' },
]
export default function Sectors() {
  return (
    <section aria-label="Sectors" className="grid gap-3 bg-moss p-3 md:grid-cols-2 md:gap-4 md:p-4 text-paper">
      {items.map(s => (
        <div key={s.k} className="group relative min-h-[70svh] overflow-hidden flex items-end">
          <Img src={img[s.k]} alt={`Reference image: ${s.t}`} className="absolute inset-0 h-full w-full transition duration-[1600ms] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="relative p-6 md:p-12"><h3 className="h-display type-card">{s.t}</h3><p className="mt-4 max-w-sm text-paper/80 leading-relaxed">{s.d}</p></div>
        </div>
      ))}
    </section>
  )
}
