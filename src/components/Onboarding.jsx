import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  'Website Design',
  'Web App Development',
  'Social Media Management',
  'Brand/UI Refresh',
]

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ service: services[0], scope: '', timeline: '', budget: '' })

  const next = () => setStep((s) => Math.min(s + 1, 4))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const onSubmit = (e) => {
    e.preventDefault()
    // For demo: open mailto with summary
    const summary = encodeURIComponent(
      `Hi Engjaa,\n\nI am interested in: ${form.service}\nScope: ${form.scope}\nTimeline: ${form.timeline}\nBudget: ${form.budget}`
    )
    window.location.href = `mailto:hello@engjaa.dev?subject=Project Inquiry&body=${summary}`
  }

  return (
    <section id="onboarding" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Start a Project</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">A quick, guided brief to get us aligned.</p>

      <form onSubmit={onSubmit} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-6">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <div>Step {step} of 4</div>
          <div className="flex gap-1">
            {[1,2,3,4].map((i) => (
              <span key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'}`} />
            ))}
          </div>
        </div>

        <div className="mt-6 min-h-[200px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">What do you need?</label>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setForm((f) => ({ ...f, service: s }))}
                      className={`rounded-lg border px-3 py-2 text-sm ${form.service === s ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300' : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/60'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Project scope</label>
                <textarea
                  value={form.scope}
                  onChange={(e) => setForm((f) => ({ ...f, scope: e.target.value }))}
                  placeholder="Describe features, pages, or goals"
                  className="mt-3 w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={5}
                />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Timeline</label>
                    <input
                      value={form.timeline}
                      onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))}
                      placeholder="e.g. 4-6 weeks"
                      className="mt-3 w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Budget</label>
                    <input
                      value={form.budget}
                      onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                      placeholder="e.g. $3k - $6k"
                      className="mt-3 w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-3 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="s4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 p-4 text-sm text-gray-700 dark:text-gray-300">
                  <div><span className="font-medium">Service:</span> {form.service}</div>
                  <div className="mt-1"><span className="font-medium">Timeline:</span> {form.timeline || '—'}</div>
                  <div className="mt-1"><span className="font-medium">Budget:</span> {form.budget || '—'}</div>
                  <div className="mt-1"><span className="font-medium">Scope:</span> {form.scope || '—'}</div>
                </div>
                <p className="mt-3 text-xs text-gray-500">Submitting will open your email with the details.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button type="button" onClick={back} disabled={step === 1} className="rounded-md border border-gray-200 dark:border-gray-800 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 disabled:opacity-50 bg-white/70 dark:bg-gray-900/60">
            Back
          </button>
          {step < 4 ? (
            <button type="button" onClick={next} className="rounded-md bg-indigo-600 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90">
              Next
            </button>
          ) : (
            <button type="submit" className="rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90">
              Send brief
            </button>
          )}
        </div>
      </form>
    </section>
  )
}
