import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Img from './Img'
import Reveal from './Reveal'
import { projectCategories, projects } from '../data/projects'
export default function Projects() {
  const [category, setCategory] = useState('All')
  const visibleProjects = category === 'All' ? projects : projects.filter(project => project.category === category)

  return (
    <section id="projects" className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-5"><h2 className="h-display type-section">Our Projects</h2></Reveal>
        <Reveal className="md:col-span-7"><p className="max-w-3xl leading-[1.8] text-char/70">Discover our curated collection of exceptional spaces, where visionary turnkey interiors meet meticulous craftsmanship across commercial, residential, and educational environments.</p></Reveal>
      </div>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {['All', ...projectCategories].map(option => (
          <button
            key={option}
            type="button"
            aria-pressed={category === option}
            onClick={() => setCategory(option)}
            className={`label border px-5 py-3 transition-colors ${category === option ? 'border-moss bg-moss text-paper' : 'border-char/20 text-char hover:border-bronze hover:text-bronze'}`}
          >
            {option === 'All' ? 'All projects' : option}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={Math.min(index * .04, .2)}>
            <article className="group h-full border border-char/15 bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Img src={project.image} alt={`Illustrative reference image for ${project.name}`} className="h-full w-full transition duration-[1200ms] group-hover:scale-105" />
                <span className="label absolute left-4 top-4 bg-paper px-3 py-2 text-char">{project.category}</span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="h-display text-2xl font-medium tracking-tight md:text-3xl">{project.name}</h3>
                <p className="label mt-3 text-bronze">{project.location}</p>
                <details className="mt-5 border-t border-char/15 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between label text-char hover:text-bronze">
                    View Details <ArrowUpRight size={16} />
                  </summary>
                  <p className="mt-4 text-sm leading-[1.8] text-char/70">{project.description}</p>
                </details>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
