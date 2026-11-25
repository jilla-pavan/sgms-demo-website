import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import useScroll from '../hooks/useScroll'
import { nav, site } from '../data/siteData'
export default function Navbar() {
  const scrolled = useScroll(); const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-3 top-4 z-50 transition-all duration-500 md:inset-x-8">
      <div className={`mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-7 border transition-all duration-500 ${scrolled || open ? 'bg-paper/95 text-ink border-char/10 shadow-[0_8px_30px_rgba(32,20,15,.12)] backdrop-blur-md' : 'bg-ink/45 text-paper border-white/20 backdrop-blur-md'}`}>
        <a href="#home" className="font-sans text-xs md:text-sm font-semibold tracking-[.18em]">{site.short}</a>
        <nav aria-label="Primary" className="hidden xl:flex gap-5 2xl:gap-8">
          {nav.map(([l, h]) => <a key={h} href={h} className="underline-grow text-[.8rem] tracking-wide py-1">{l}</a>)}
        </nav>
        <a href="#contact" className="hidden xl:inline-block label px-5 py-3 bg-bronze text-paper transition-colors hover:bg-char">Let's talk</a>
        <button className="xl:hidden p-2" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav aria-label="Mobile" className="xl:hidden mt-2 max-h-[calc(100svh-6rem)] overflow-y-auto bg-ink text-paper px-5 pb-8 pt-2 flex flex-col shadow-xl">
        {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-sans text-2xl font-light tracking-tight py-3 border-b border-white/10">{l}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="label mt-6 bg-bronze text-paper text-center py-4">Discuss your project</a>
      </nav>}
    </header>
  )
}
