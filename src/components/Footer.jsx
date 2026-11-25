import { ArrowUp } from 'lucide-react'
import { nav, site } from '../data/siteData'
export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 border-t border-white/10">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-sans text-lg font-semibold tracking-[.2em] text-paper md:text-xl">{site.short}</p>
          <p className="mt-3 text-sm">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="grid gap-3 text-sm md:col-span-4 md:pt-1">
          {nav.filter(([l]) => l !== 'Our Approach').map(([l, h]) => <a key={h} href={h} className="underline-grow w-fit">{l}</a>)}
        </nav>
        <div className="flex items-start gap-5 md:col-span-3 md:justify-end">
          <a href="#home" aria-label="Back to top" className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-paper/30 transition hover:bg-paper hover:text-ink"><ArrowUp size={18} /></a>
          {site.social.map(s => <a key={s.href} href={s.href} className="mt-3 text-sm underline-grow">{s.label}</a>)}
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 pb-24 text-center text-xs md:pb-6">© 2026 SGMS Projects Private Limited. All rights reserved.</p>
    </footer>
  )
}
