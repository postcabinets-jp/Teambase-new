import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden" id="cta">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          今年こそ、「属人経営」の壁を越え、<br />
          チームで売上を伸ばす経営へ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg mb-10"
        >
          その土台構築はTeamBaseで実現できます！
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://forms.gle/M4KJCoBpgJakffaP7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-5"
          >
            今すぐ資料請求 ▶
          </a>
        </motion.div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  )
} 