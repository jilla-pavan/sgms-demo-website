import { MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

export default function WhatsAppButton() {
  const phone = `91${site.contact.phone.replace(/\D/g, '')}`
  const message = encodeURIComponent('Hello SGMS Projects, I would like to discuss a project.')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SGMS Projects on WhatsApp"
      title="Chat with SGMS Projects on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 min-w-14 items-center justify-center bg-[#25D366] text-[#102A1A] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-offset-4 sm:bottom-6 sm:right-6 sm:w-auto sm:gap-3 sm:px-5"
    >
      <MessageCircle size={22} strokeWidth={2.2} />
      <span className="label hidden sm:inline">WhatsApp</span>
    </a>
  )
}
