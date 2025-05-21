import { ArrowDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const phases = [
  {
    title: '幼年期',
    description: '経営者＝現場の職人。何とか会社は回っている。',
    color: 'bg-green-100 border-green-400',
    iconBg: 'bg-green-300',
  },
  {
    title: '成長期',
    description: '組織はできたが、経営者の職人意識が残り、社長以外の頑張りがなければ成長が止まる。',
    color: 'bg-yellow-100 border-yellow-400',
    iconBg: 'bg-yellow-300',
  },
  {
    title: '成熟期',
    description: '社長が不在でも売上が立ち、成長する仕組みが確立。経営者は事業拡大に集中できる。',
    color: 'bg-blue-100 border-blue-400',
    iconBg: 'bg-blue-300',
  },
]

export default function GrowthPhasesAlt() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="growth-alt">
      {/* 波型SVG */}
      <svg className="absolute top-0 left-0 w-full h-12 text-green-50" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          事業成長の3つのフェーズ
        </motion.h2>
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-0 relative">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`w-full flex items-center gap-4 mb-0 relative z-10`}
            >
              <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-4 ${phase.iconBg} border-white shadow-lg`}>
                <CheckCircleIcon className="w-7 h-7 text-white" />
              </span>
              <div className={`flex-1 ${phase.color} border-l-4 ${phase.color} rounded-xl p-6 shadow text-green-900`}> 
                <div className="text-xl font-bold mb-1">{i + 1}. {phase.title}</div>
                <div className="text-base md:text-lg">{phase.description}</div>
              </div>
              {i < phases.length - 1 && (
                <ArrowDownIcon className="w-8 h-8 text-green-200 absolute left-1/2 -bottom-6 -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-14 flex items-center bg-green-50/80 border-l-4 border-green-400 rounded-xl p-6 shadow text-green-700 font-bold text-lg md:text-xl justify-center"
        >
          多くのスクール事業者は「成長期」で足踏みしています。
        </motion.div>
      </div>
      {/* 下部にも波型SVG */}
      <svg className="absolute left-0 right-0 bottom-0 w-full h-10 text-green-50" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  )
} 