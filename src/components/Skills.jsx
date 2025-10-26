import { motion } from 'framer-motion'
import { Code, Layout, Paintbrush, Sparkles } from 'lucide-react'

const skills = [
  { icon: Layout, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Radix'] },
  { icon: Code, title: 'Backend', items: ['FastAPI', 'Node', 'REST', 'Auth'] },
  { icon: Paintbrush, title: 'Design', items: ['Figma', 'Shadcn', 'Spline', 'A11y'] },
  { icon: Sparkles, title: 'Motion', items: ['Framer Motion', 'Lottie', '3D Interactions'] },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
      >
        Skills
      </motion.h3>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5"
          >
            <div className="flex items-center gap-3">
              <s.icon className="text-indigo-600" size={20} />
              <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{s.title}</h4>
            </div>
            <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {s.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
