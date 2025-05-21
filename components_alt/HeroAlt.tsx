import { motion } from 'framer-motion'

export default function HeroAlt() {
  return (
    <section className="relative bg-gradient-to-br from-green-200 via-green-50 to-white pt-36 pb-24 overflow-hidden">
      {/* 波型SVG */}
      <svg className="absolute top-0 left-0 w-full h-32 text-green-300" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="0.3" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,117.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-xl mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-green-900"
          >
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">TeamBase</span>で<br />
            スクール事業の売上課題を<br />
            <span className="underline decoration-wavy decoration-green-400">最速で解決！</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-green-800"
          >
            属人経営から脱却し、<br className="hidden md:block" />
            チームで売上を最大化する新しい仕組みを体験しませんか？
          </motion.p>
          <motion.a
            href="#cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.06, 1] }}
            transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            今すぐ資料請求
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src="/images/hero-visual-alt.png" alt="TeamBaseイメージ" className="w-[320px] md:w-[400px] rounded-xl shadow-2xl border-4 border-green-100 bg-white" />
        </motion.div>
      </div>
      {/* 下部にも波型SVG */}
      <svg className="absolute left-0 right-0 bottom-0 w-full h-24 text-green-100" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  )
} 