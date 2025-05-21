import { Cog6ToothIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const icons = [UserGroupIcon, Cog6ToothIcon, ChartBarIcon]

const solutions = [
  {
    title: 'チームが自走する組織へ',
    description: '社員・メンバーが自主的に動き、社長がいなくても売上が立つ「経営の仕組み化」を実現します。',
  },
  {
    title: '現場依存からの脱却',
    description: '現場の最前線で動き続けていては、次の成長フェーズには進めません。仕組みで現場を回します。',
  },
  {
    title: '持続的な成長を実現',
    description: '社長が不在でも売上が立ち、事業拡大に集中できる体制を構築します。',
  },
]

export default function Solution() {
  return (
    <section className="py-24 bg-gray-50" id="solution">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary"
        >
          属人経営から脱却し、チームで自走する組織へ
        </motion.h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {solutions.map((sol, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: 'backOut' }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-shadow text-center flex flex-col items-center card"
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.2, ease: 'linear' }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                </motion.span>
                <div className="text-xl font-bold mb-2 text-primary">{sol.title}</div>
                <div className="text-gray-700 text-base md:text-lg">{sol.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 