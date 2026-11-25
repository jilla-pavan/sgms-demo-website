import { useState } from 'react'
// Image with graceful tonal fallback so a failed remote image never looks broken.
export default function Img({ src, alt, className = '', eager = false }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-stone to-bronze/60 ${className}`} />
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} className={`object-cover ${className}`} />
}
