import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const reasons = [
  '何でも自分でやろうとしてしまう',
  '「自分がやった方が早い」と思ってしまう',
  '現場にいないと不安になる',
]

export default function Why() {
  return (
    <section className="py-20 bg-gray-50" id="why">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
        >
          なぜ、成長が止まってしまうのか？
        </motion.h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex items-center bg-white rounded-xl p-5 shadow hover:shadow-lg transition-shadow card"
            >
              <ExclamationTriangleIcon className="w-7 h-7 text-accent mr-4 flex-shrink-0" />
              <span className="text-lg font-medium text-gray-800">{reason}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'backOut' }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-10 flex items-center bg-accent/10 border-l-4 border-accent rounded-xl p-6 shadow text-accent font-bold text-lg md:text-xl justify-center"
        >
          <ExclamationTriangleIcon className="w-7 h-7 mr-3 text-accent flex-shrink-0" />
          これが"属人経営"の根本原因です。
        </motion.div>
      </div>
    </section>
  )
} 