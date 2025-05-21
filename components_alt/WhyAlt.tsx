import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const reasons = [
  '何でも自分でやろうとしてしまう',
  '「自分がやった方が早い」と思ってしまう',
  '現場にいないと不安になる',
]

export default function WhyAlt() {
  return (
    <section className="relative py-20 bg-white overflow-hidden" id="why-alt">
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
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-700"
        >
          なぜ、成長が止まってしまうのか？
        </motion.h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center backdrop-blur bg-white/70 border border-green-100 rounded-xl p-5 shadow hover:shadow-xl transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 mr-4">
                <ExclamationTriangleIcon className="w-6 h-6 text-green-500" />
              </span>
              <span className="text-lg font-medium text-green-900">{reason}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'backOut' }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-10 flex items-center bg-green-50/80 border-l-4 border-green-400 rounded-xl p-6 shadow text-green-700 font-bold text-lg md:text-xl justify-center"
        >
          <ExclamationTriangleIcon className="w-7 h-7 mr-3 text-green-500 flex-shrink-0" />
          これが"属人経営"の根本原因です。
        </motion.div>
      </div>
      {/* 下部にも波型SVG */}
      <svg className="absolute left-0 right-0 bottom-0 w-full h-10 text-green-50" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  )
} 