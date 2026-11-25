import Img from './Img'
import Reveal from './Reveal'
import { featuredCollection, premiumCollection } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

function PortfolioCard({ project, premium = false, delay = 0 }) {
  return (
    <Reveal className="h-full" delay={delay}>
      <article className={`group flex h-full flex-col border ${premium ? 'border-paper/20 bg-ink/20' : 'border-char/15 bg-paper'}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <Img src={project.image} alt={project.alt} className="h-full w-full transition duration-[1200ms] group-hover:scale-105" />
          <span className={`label absolute left-4 top-4 px-3 py-2 ${premium ? 'bg-cream text-ink' : 'bg-paper text-char'}`}>{project.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h4 className={`h-display text-2xl font-medium tracking-tight md:text-3xl ${premium ? 'text-paper' : 'text-char'}`}>{project.name}</h4>
          {project.description && <p className={`mt-4 text-sm leading-[1.8] ${premium ? 'text-paper/75' : 'text-char/70'}`}>{project.description}</p>}
          {project.features && (
            <ul className="mt-5 grid gap-2 border-t border-paper/20 pt-4">
              {project.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm text-paper/80"><span aria-hidden className="mt-[.65em] h-1.5 w-1.5 shrink-0 bg-cream" />{feature}</li>)}
            </ul>
          )}
          <a href="#contact" className={`mt-auto inline-flex items-center gap-2 pt-6 label underline-grow ${premium ? 'text-cream' : 'text-char'}`}>
            Discuss a similar project <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </article>
    </Reveal>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5"><h2 className="h-display type-section">Our Portfolio</h2></Reveal>
          <Reveal className="md:col-span-7"><p className="max-w-3xl leading-[1.8] text-char/70">Each project represents a unique collaboration between our turnkey interior execution expertise and our clients’ vision. Explore our work and discover how we transform spaces into exceptional environments.</p></Reveal>
        </div>
        <p className="mt-5 text-xs text-char/55">Some photography is illustrative reference imagery and may not depict completed SGMS projects.</p>

        <section className="mt-16 border-t border-char/15 pt-10">
          <p className="label text-bronze">Featured collection</p>
          <h3 className="h-display mt-4 text-3xl font-medium tracking-tight md:text-5xl">Luxury Commercial Restaurant &amp; Bar Turnkey Interior Execution</h3>
          <p className="mt-4 max-w-4xl leading-[1.8] text-char/70">Showcasing our specialized expertise in fine dining, upscale bars, and premium hospitality spaces. Discover environments meticulously crafted with sophisticated finishes, custom furnishings, and transformative ambient lighting.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredCollection.map((project, index) => <PortfolioCard key={project.id} project={project} delay={index * .06} />)}
          </div>
        </section>

        <section className="mt-20 bg-moss p-5 text-paper md:p-10">
          <p className="label text-cream">Premium portfolio</p>
          <h3 className="h-display type-section mt-4">Luxury Commercial Interiors</h3>
          <p className="mt-4 max-w-4xl leading-[1.8] text-paper/75">Experience our highest echelon of commercial turnkey interior execution. These signature spaces highlight our mastery of high-end commercial interiors, featuring ornate gold detailing, bespoke marble finishes, and sophisticated craftsmanship.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {premiumCollection.map((project, index) => <PortfolioCard key={project.id} project={project} premium delay={index * .06} />)}
          </div>
        </section>

      </div>
    </section>
  )
}
