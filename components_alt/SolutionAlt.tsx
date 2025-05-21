import { Cog6ToothIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const solutions = [
  {
    icon: <UserGroupIcon className="w-10 h-10 text-green-500 mb-4" />,
    title: 'チームが自走する組織へ',
    description: '社員・メンバーが自主的に動き、社長がいなくても売上が立つ「経営の仕組み化」を実現します。',
  },
  {
    icon: <Cog6ToothIcon className="w-10 h-10 text-green-500 mb-4" />,
    title: '現場依存からの脱却',
    description: '現場の最前線で動き続けていては、次の成長フェーズには進めません。仕組みで現場を回します。',
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-green-500 mb-4" />,
    title: '持続的な成長を実現',
    description: '社長が不在でも売上が立ち、事業拡大に集中できる体制を構築します。',
  },
]

export default function SolutionAlt() {
  return (
    <section className="relative py-24 bg-green-50 overflow-hidden" id="solution-alt">
      {/* 波型SVG */}
      <svg className="absolute top-0 left-0 w-full h-12 text-green-100" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,117.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-green-700"
        >
          属人経営から脱却し、チームで自走する組織へ
        </motion.h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition-shadow text-center flex flex-col items-center border border-green-100"
            >
              {sol.icon}
              <div className="text-xl font-bold mb-2 text-green-700">{sol.title}</div>
              <div className="text-green-800 text-base md:text-lg">{sol.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* 下部にも波型SVG */}
      <svg className="absolute left-0 right-0 bottom-0 w-full h-10 text-green-50" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  )
} 