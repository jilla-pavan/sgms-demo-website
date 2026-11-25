import { Phone, Mail, MapPin, Clock3 } from 'lucide-react'
import ContactForm from './ContactForm'
import Reveal from './Reveal'
import { site } from '../data/siteData'
export default function ContactSection() {
  const c = site.contact
  const links = [c.phone && [Phone, 'Phone', `tel:${c.phone.replace(/\s/g, '')}`, c.phone], c.email && [Mail, 'Email', `mailto:${c.email}`, c.email], c.mapsUrl && [MapPin, 'Get directions', c.mapsUrl, c.address]].filter(Boolean)
  return (
    <section id="contact" className="bg-ink text-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:grid-cols-12 md:items-start md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal><h2 className="h-display type-section">Contact Us</h2></Reveal>
          <p className="mt-5 max-w-md leading-[1.8] text-paper/75">Tell us about your project. We’ll be in touch to discuss the next steps.</p>
          <h3 className="label mt-8 text-cream">Get in touch</h3>
          <address className="mt-4 not-italic grid gap-4 text-paper/80">
            {c.address && <p>{c.address}</p>}
            {links.map(([I, l, h, t]) => <a key={l} href={h} className="inline-flex items-center gap-3 underline-grow w-fit"><I size={16} className="text-bronze" />{l}{t && <span className="text-paper/50">· {t}</span>}</a>)}
            {c.hours && <p className="inline-flex items-center gap-3"><Clock3 size={16} className="text-bronze" />Hours <span className="text-paper/50">· {c.hours}</span></p>}
          </address>
        </div>
        <div className="md:col-span-7">
          <h3 className="h-display mb-8 text-2xl font-medium md:text-3xl">Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
