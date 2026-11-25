import Reveal from './Reveal'
const pts = [['Detail, resolved early', 'Materials, finishes and joinery are considered before execution begins.'], ['Plans that work', 'Layouts are driven by function and flow, then refined for beauty.'], ['One team, start to finish', 'Turnkey execution keeps planning and delivery under one roof.']]
export default function WhySGMS() {
  return (
    <section className="mx-auto max-w-[1500px] px-5 md:px-10 py-24 md:py-36 grid md:grid-cols-12 gap-12">
      <Reveal className="md:col-span-5"><h2 className="h-display type-section">Why SGMS Projects</h2></Reveal>
      <div className="md:col-span-7 divide-y divide-char/15 border-y border-char/15">
        {pts.map(([t, d]) => <Reveal key={t}><div className="py-8 md:flex md:gap-10"><h3 className="h-display type-card md:w-1/3">{t}</h3><p className="mt-2 md:mt-0 md:w-2/3 text-char/70 leading-[1.8]">{d}</p></div></Reveal>)}
      </div>
    </section>
  )
}
