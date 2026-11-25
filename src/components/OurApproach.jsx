import Reveal from './Reveal'
const steps = [
  ['Initial consultation', 'Discuss your goals, style, requirements, and project priorities.'],
  ['Discovery & brief', 'Gather project details and define a clear, shared direction.'],
  ['Concept & palette', 'Explore the visual direction, color palette, and material options.'],
  ['Space planning', 'Develop layouts that make the best use of your space.'],
  ['Budget & scheduling', 'Plan the project scope, procurement, and timeline.'],
  ['Execution & coordination', 'Coordinate contractors, installations, and quality checks.'],
  ['Final reveal', 'Review the completed space and bring the project to handover.'],
]
export default function OurApproach() {
  return (
    <section id="approach" className="mx-auto max-w-[1500px] px-5 md:px-10 py-24 md:py-36">
      <Reveal><h2 className="h-display type-section">Our 7-Step Process</h2></Reveal>
      <p className="mt-5 max-w-3xl leading-[1.8] text-char/70">We follow a structured, transparent approach to ensure every project meets your expectations and timeline. From the initial handshake to the final reveal, our process is designed for clarity and excellence.</p>
      <ol className="mt-14 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map(([t, d], i) => (
          <li key={t} className={`flex min-h-[220px] flex-col border border-char/10 p-6 md:p-8 ${i === steps.length - 1 ? 'bg-moss text-paper' : 'bg-sand text-char'}`}>
            <div className="flex items-center justify-between border-b border-current/15 pb-5">
              <span className={`label ${i === steps.length - 1 ? 'text-cream' : 'text-bronze'}`}>Step {String(i + 1).padStart(2, '0')}</span>
              <span aria-hidden className={`h-px w-12 ${i === steps.length - 1 ? 'bg-paper/50' : 'bg-char/25'}`} />
            </div>
            <h3 className="h-display mt-6 text-xl font-medium tracking-tight md:text-2xl">{t}</h3>
            <p className={`mt-3 text-sm leading-[1.8] ${i === steps.length - 1 ? 'text-paper/80' : 'text-char/70'}`}>{d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
