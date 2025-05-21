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

export default function Problems() {
  return (
    <section className="py-24 bg-white" id="problems">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          こんなお悩みありませんか？
        </motion.h2>
        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
          {problems.map((problem, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex items-start bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow card"
            >
              <CheckCircleIcon className="w-7 h-7 text-accent mr-4 flex-shrink-0" />
              <span className="text-lg font-medium text-gray-800">{problem}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 mt-12"
        >
          ひとつでも当てはまるなら、<br className="hidden md:inline" />
          事業拡大の大きな壁に直面しているかもしれません。
        </motion.p>
      </div>
    </section>
  )
} 