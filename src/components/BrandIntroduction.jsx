import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Img from './Img'
import Reveal from './Reveal'
import { img } from '../data/siteData'

export default function BrandIntroduction() {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? ['0%', '0%'] : ['-4%', '4%'])

  return (
    <section id="about" ref={ref} className="bg-paper">
      <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal><p className="label mb-6 text-bronze">Established 1989</p></Reveal>
            <Reveal><h2 className="h-display type-section">Our Legacy</h2></Reveal>
            <Reveal delay={.1}><p className="mt-6 max-w-lg text-lg leading-[1.8] text-char/75">A heritage of quality and architectural excellence, crafting spaces that inspire, comfort, and endure.</p></Reveal>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden md:col-span-7">
            <motion.div style={{ y }} className="absolute inset-[-10%]">
              <Img src={img.intro} alt="Luxurious interior space representing SGMS Projects' legacy" className="h-full w-full" />
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-char/15 pt-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-4">
            <p className="label text-bronze">Where we began</p>
            <h3 className="h-display mt-4 text-3xl font-medium tracking-tight md:text-4xl">Our Story</h3>
          </Reveal>
          <div className="grid gap-5 leading-[1.85] text-char/75 md:col-span-8">
            <Reveal><p>Founded in 1989 by Mr. Chagan Lal, SGMS built its reputation on quality, meticulous craftsmanship, and thoughtful interior execution.</p></Reveal>
            <Reveal delay={.1}><p>After decades of work across South India, the firm became SGMS Projects Private Limited in 2026 under the leadership of Mr. Lal’s sons. Today, the team brings together its experience and contemporary ideas to create lasting spaces.</p></Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-char/15 pt-8 md:grid-cols-12 md:items-start md:gap-12">
          <div className="md:col-span-4">
            <p className="label text-bronze">Leadership</p>
            <h3 className="h-display mt-3 text-3xl font-medium tracking-tight">Sawai Ram</h3>
            <p className="mt-2 text-sm text-char/65">Director, SGMS Projects Private Limited</p>
          </div>
          <Reveal className="md:col-span-8">
            <p className="leading-[1.8] text-char/75">Sawai Ram guides the firm’s operational and strategic initiatives, bringing hands-on experience across commercial and residential projects and a commitment to quality.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
