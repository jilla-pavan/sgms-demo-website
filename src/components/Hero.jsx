import { motion, useReducedMotion } from 'framer-motion'
import Img from './Img'
import { img, site } from '../data/siteData'
const line = (t, i, reducedMotion) => <span className="block overflow-hidden"><motion.span className="block" initial={reducedMotion ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ duration: reducedMotion ? .01 : 1, delay: reducedMotion ? 0 : .35 + i * .12, ease: [.22, 1, .36, 1] }}>{t}</motion.span></span>
export default function Hero() {
  const reducedMotion = useReducedMotion()
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-moss text-paper">
      <motion.div className="absolute inset-0" initial={reducedMotion ? false : { scale: 1.045 }} animate={{ scale: 1 }} transition={{ duration: reducedMotion ? .01 : 2.3, ease: [.22, 1, .36, 1] }}>
        <Img eager src={img.hero} alt="Contemporary living interior with natural light and warm materials" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" />
      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1600px] grid-cols-1 content-end gap-8 px-6 pb-10 pt-32 sm:px-8 md:px-12 md:pb-16 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-16">
        <div className="lg:col-span-8">
          <p className="label text-stone mb-5">{site.name}</p>
          <h1 className="h-display type-hero max-w-[13ch] leading-[.94]">{line('Make life brighter.', 0, reducedMotion)}</h1>
        </div>
        <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : 1.05, duration: reducedMotion ? .01 : .7, ease: [.22, 1, .36, 1] }} className="lg:col-span-4 lg:justify-self-end lg:max-w-sm">
          <p className="max-w-md text-paper/85 leading-relaxed">{site.tagline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <a href="#services" className="label bg-bronze text-paper px-7 py-4 text-center shadow-[0_8px_24px_rgba(42,34,34,.2)] hover:bg-char transition-colors">Explore our services</a>
            <a href="#contact" className="label border border-paper/50 px-7 py-4 text-center hover:bg-paper hover:text-ink transition-colors">Discuss your project</a>
          </div>
        </motion.div>
      </div>
      {!reducedMotion && <motion.div aria-hidden className="absolute bottom-8 right-7 hidden h-10 w-px bg-paper/50 md:block lg:right-10" initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: .7 }} transition={{ delay: 1.7, duration: .6, ease: [.22, 1, .36, 1] }} />}
    </section>
  )
}
