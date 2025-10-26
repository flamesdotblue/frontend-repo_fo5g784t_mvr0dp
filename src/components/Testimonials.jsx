import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Amina, Founder', quote: 'Engjaa delivered a polished, on-brand site that increased our signups.', rating: 5 },
  { name: 'Sam, PM', quote: 'Fast, thoughtful, and great with motion design. Highly recommend.', rating: 5 },
  { name: 'Leo, Dev Lead', quote: 'Seamless handoff and clean components. Performance was excellent.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
      >
        Testimonials
      </motion.h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5"
          >
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">“{t.quote}”</p>
            <div className="mt-3 text-sm font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
