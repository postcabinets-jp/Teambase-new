'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Problems from '../components/Problems'
import Why from '../components/Why'
import GrowthPhases from '../components/GrowthPhases'
import Solution from '../components/Solution'
import Pitfall from '../components/Pitfall'
import SpecialPlan from '../components/SpecialPlan'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Why />
        <GrowthPhases />
        <Solution />
        <Pitfall />
        <SpecialPlan />
        <CTA />
        {/* Q&Aセクション */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary">Q&A</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Q. サービスの導入に必要な期間は？</h3>
                <p className="text-gray-700">A. 通常1〜2週間でご利用開始いただけます。ご要望に応じて柔軟に対応可能です。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Q. サポート体制は？</h3>
                <p className="text-gray-700">A. 専任担当が導入から運用までしっかりサポートします。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Q. 料金プランは？</h3>
                <p className="text-gray-700">A. ご要望に合わせたプランをご提案します。お気軽にご相談ください。</p>
              </div>
            </div>
          </div>
        </section>
        {/* ここに今後、各セクション（信頼・実績、課題提起、特徴、事例、FAQ、CTAなど）を追加していきます */}
      </main>
      <Footer />
    </div>
  )
} 