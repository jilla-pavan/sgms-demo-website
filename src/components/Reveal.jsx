import { motion, useReducedMotion } from 'framer-motion'
export default function Reveal({ children, delay = 0, className = '' }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px', amount: .12 }}
      transition={{ duration: reducedMotion ? .01 : .72, delay: reducedMotion ? 0 : delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  )
}
