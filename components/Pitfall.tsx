import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const pitfalls = [
  '「売上」や「数字の目標」だけを共有しても、チームは本気で動かない',
  '「それって社長の目標ですよね？」と他人事になってしまう',
  '「やらされ感」で動く組織に、本当の成長は生まれません',
]

export default function Pitfall() {
  return (
    <section className="py-24 bg-white" id="pitfall">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary"
        >
          よくある落とし穴
        </motion.h2>
        <div className="max-w-2xl mx-auto grid gap-6 mb-10">
          {pitfalls.map((pit, i) => (
            <motion.div
              key={pit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow card"
            >
              <InformationCircleIcon className="w-7 h-7 text-accent mr-4 flex-shrink-0" />
              <span className="text-lg font-medium text-gray-800">{pit}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto flex items-center bg-accent/10 border-l-4 border-accent rounded-xl p-6 shadow text-accent font-bold text-lg md:text-xl justify-center"
        >
          本当にチームが動き出すのは、「ワクワクするビジョン」を全員が"自分ごと"として共有できたときです。
        </motion.div>
      </div>
    </section>
  )
} 