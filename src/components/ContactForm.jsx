import { useState } from 'react'
import { projectTypes } from '../data/services'
import { site } from '../data/siteData'
const init = { name: '', phone: '', email: '', type: '', location: '', message: '' }
const field = 'w-full bg-transparent border-b border-paper/30 py-3 transition-colors focus:border-bronze outline-none placeholder:text-paper/40'
export default function ContactForm() {
  const [v, setV] = useState(init); const [err, setErr] = useState({}); const [status, setStatus] = useState('idle')
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const validate = () => {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Enter your full name.'
    if (!/^[+\d][\d\s-]{7,15}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
    if (!v.type) e.type = 'Choose a project type.'
    if (v.message.trim().length < 10) e.message = 'Tell us a little about the project.'
    return e
  }
  const submit = async ev => {
    ev.preventDefault(); const e = validate(); setErr(e); if (Object.keys(e).length) return
    if (!site.formEndpoint) { setStatus('demo'); return } // demo mode: nothing is sent
    setStatus('sending')
    try { const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) }); if (!r.ok) throw 0; setStatus('sent'); setV(init) } catch { setStatus('error') }
  }
  const F = ({ id, label, children }) => <div><label htmlFor={id} className="label text-stone">{label}</label>{children}{err[id] && <p id={`${id}-e`} role="alert" className="text-sm text-[#e8b4a0] mt-1">{err[id]}</p>}</div>
  const p = id => ({ id, value: v[id], onChange: set(id), className: field, 'aria-invalid': !!err[id], 'aria-describedby': err[id] ? `${id}-e` : undefined })
  return (
    <form onSubmit={submit} noValidate className="grid gap-7">
      <F id="name" label="Full name"><input {...p('name')} autoComplete="name" /></F>
      <div className="grid sm:grid-cols-2 gap-7">
        <F id="phone" label="Phone number"><input {...p('phone')} type="tel" autoComplete="tel" /></F>
        <F id="email" label="Email address"><input {...p('email')} type="email" autoComplete="email" /></F>
      </div>
      <div className="grid sm:grid-cols-2 gap-7">
        <F id="type" label="Project type"><select {...p('type')}><option value="" className="text-ink">Select</option>{projectTypes.map(t => <option key={t} className="text-ink">{t}</option>)}</select></F>
        <F id="location" label="Project location"><input {...p('location')} /></F>
      </div>
      <F id="message" label="Tell us about your project"><textarea {...p('message')} rows={4} /></F>
      <button disabled={status === 'sending'} className="label bg-bronze text-paper px-8 py-4 hover:bg-char transition-colors disabled:opacity-60 justify-self-start">{status === 'sending' ? 'Sending…' : 'Submit enquiry'}</button>
      <div aria-live="polite" className="text-sm">
        {status === 'demo' && <p className="border border-bronze/60 p-4 text-stone">Demo mode: the form is valid, but no backend is connected, so this enquiry was not sent. Set VITE_FORM_ENDPOINT to enable delivery.</p>}
        {status === 'sent' && <p className="text-stone">Thank you. Your enquiry has been sent.</p>}
        {status === 'error' && <p className="text-[#e8b4a0]">Your enquiry could not be sent. Please try again.</p>}
      </div>
    </form>
  )
}
