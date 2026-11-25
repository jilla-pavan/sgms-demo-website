// Intentionally empty until verified testimonials exist. Add entries to `items` to render them.
const items = [] // [{ quote:'', name:'', role:'' }]
export default function Testimonials() {
  if (!items.length) return null
  return (
    <section className="bg-sand py-24"><div className="mx-auto max-w-4xl px-5 grid gap-12">
      {items.map(t => <figure key={t.name}><blockquote className="h-display type-quote">“{t.quote}”</blockquote><figcaption className="mt-4 text-sm">{t.name}{t.role && `, ${t.role}`}</figcaption></figure>)}
    </div></section>
  )
}
