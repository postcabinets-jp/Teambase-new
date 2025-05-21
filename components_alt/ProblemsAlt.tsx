import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const problems = [
  '売上を自分一人で作ることに限界を感じている',
  '人員は増えたのに、経営の負担が減らない',
  'メンバーのモチベーションが低く、業績に本気なのは自分だけ',
  'チームに任せたいのに、なかなか任せきれない',
  '経営者なのに、現場で走り回っている',
  '集客はできているのに、サポートが追いつかない',
]

export default function ProblemsAlt() {
  return (
    <section className="relative py-24 bg-green-50 overflow-hidden" id="problems-alt">
      {/* 波型SVG */}
      <svg className="absolute top-0 left-0 w-full h-16 text-green-200" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.5" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,122.7C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700"
        >
          こんなお悩みありませんか？
        </motion.h2>
        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
          {problems.map((problem, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start bg-white rounded-xl p-6 shadow hover:shadow-xl transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 mr-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              </span>
              <span className="text-lg font-medium text-green-900">{problem}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-lg text-green-700 mt-12"
        >
          ひとつでも当てはまるなら、<br className="hidden md:inline" />
          事業拡大の大きな壁に直面しているかもしれません。
        </motion.p>
      </div>
      {/* 下部にも波型SVG */}
      <svg className="absolute left-0 right-0 bottom-0 w-full h-12 text-green-100" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  )
} 