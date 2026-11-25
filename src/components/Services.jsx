import { ArrowUpRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { services } from '../data/services'
import { img } from '../data/siteData'
export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5"><h2 className="h-display type-section">Our Services</h2></Reveal>
          <Reveal delay={.1} className="md:col-span-7"><p className="max-w-3xl leading-[1.8] text-char/70">We offer a full spectrum of turnkey interior execution services tailored to meet the unique needs of each client. From initial concept to final installation, our team is dedicated to delivering exceptional results.</p></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * .06}>
              <article className="group h-full border border-char/15 bg-paper">
                <div className="aspect-[16/8] overflow-hidden bg-cream">
                  <Img src={img[s.img]} alt={`Reference image: ${s.title}`} className="h-full w-full transition duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8">
                  <span className="font-sans text-sm font-semibold tracking-widest text-bronze">0{i + 1}</span>
                  <h3 className="h-display type-card mt-3">{s.title}</h3>
                  <p className="mt-4 leading-[1.8] text-char/70">{s.text}</p>
                  <h4 className="label mt-6 text-char/60">Key benefits</h4>
                  <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                    {s.benefits.map(benefit => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-char/75">
                        <span aria-hidden className="mt-[.65em] h-1.5 w-1.5 shrink-0 bg-bronze" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 label underline-grow">Enquire <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
