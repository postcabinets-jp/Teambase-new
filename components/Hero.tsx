import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-accent text-white pt-36 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight drop-shadow text-white"
          >
            アドネス株式会社が提供する<span className="text-accent font-extrabold">「Teambase」</span>が<br />
            スクール事業者の<span className="text-accent font-extrabold">売上げ向上課題を徹底解決！</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl mb-8 text-white/90"
          >
            "属人経営"から脱却し、<br />
            チームで売上を最大化する新しい仕組みを、今すぐ体験しませんか？
          </motion.p>
          <motion.a
            href="#cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.08, 1] }}
            transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="inline-block btn-primary text-lg px-8 py-4 shadow-xl"
          >
            今すぐ資料請求
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src="/banner.png" alt="SL.AI Team Base Todo app バナー" className="w-full max-w-2xl h-auto rounded-xl shadow-2xl border-4 border-white/20" />
        </motion.div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </section>
  )
} 