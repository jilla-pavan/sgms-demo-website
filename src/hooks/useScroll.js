import { useEffect, useState } from 'react'
export default function useScroll(threshold = 40) {
  const [scrolled, set] = useState(false)
  useEffect(() => { const f = () => set(window.scrollY > threshold); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [threshold])
  return scrolled
}
