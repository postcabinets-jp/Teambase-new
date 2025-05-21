import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const phases = [
  {
    title: '幼年期',
    description: '経営者＝現場の職人。何とか会社は回っている。',
    color: 'bg-blue-100 border-blue-400',
  },
  {
    title: '成長期',
    description: '組織はできたが、経営者の職人意識が残り、社長以外の頑張りがなければ成長が止まる。',
    color: 'bg-green-100 border-green-400',
  },
  {
    title: '成熟期',
    description: '社長が不在でも売上が立ち、成長する仕組みが確立。経営者は事業拡大に集中できる。',
    color: 'bg-yellow-100 border-yellow-400',
  },
]

export default function GrowthPhases() {
  return (
    <section className="py-24 bg-white" id="growth">
      <div className="container mx-auto px-4 relative">
        {/* アイキャッチ画像 */}
        {/*
        <div className="absolute right-0 top-0 w-48 md:w-64 lg:w-80 -mt-12 -mr-4 z-0 opacity-80 pointer-events-none hidden md:block">
          <img src="/images/growth-eyecatch.png" alt="成長ストーリーイメージ" className="w-full h-auto rounded-xl shadow-lg border border-gray-200" />
        </div>
        */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary relative z-10"
        >
          事業成長の3つのフェーズ
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex-1 border-l-4 ${phase.color} rounded-xl p-8 shadow text-center relative min-w-[220px] card`}
            >
              <div className="text-2xl font-bold mb-4 text-primary">{i + 1}. {phase.title}</div>
              <div className="text-gray-700 text-base md:text-lg mb-2">{phase.description}</div>
              {i < phases.length - 1 && (
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2, ease: 'backOut' }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute top-1/2 right-[-32px] -translate-y-1/2"
                >
                  <ArrowLongRightIcon className="w-8 h-8 text-gray-300" />
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-14 flex items-center bg-accent/10 border-l-4 border-accent rounded-xl p-6 shadow text-accent font-bold text-lg md:text-xl justify-center relative z-10"
        >
          多くのスクール事業者は「成長期」で足踏みしています。
        </motion.div>
      </div>
    </section>
  )
} 