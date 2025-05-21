import { SparklesIcon, UserCircleIcon, UsersIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const plans = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-accent mb-2" />,
    title: 'オリジナルAI経営支援ツール',
    description: 'アドネス社で実際に活用しているAIツールを必要に応じてご提供します。',
    detail: 'OKR明確化、ネクストアクション提案、商品販売戦略ストーリーマップ可視化などをサポート。',
    link: 'https://udify.app/chat/9wrlvg2BA8Xo0D5',
  },
  {
    icon: <UserCircleIcon className="w-8 h-8 text-accent mb-2" />,
    title: '経営者マッチングプラットフォーム',
    description: 'TeamBaseを導入いただいている企業様同士を目的や課題に基づいてマッチング。',
    detail: '相互支援や共同事業創出を促進します。',
    link: '#',
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-accent mb-2" />,
    title: 'ハイレベル人材プール活用スカウト',
    description: '弊社の抱える人材プールから最適な人材を迅速・効率的にスカウトできます。',
    detail: 'Googleフォームからご相談ください。',
    link: '#',
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-accent mb-2" />,
    title: 'みかみ直接経営コンサルティング',
    description: 'みかみが直接、個別でコンサルやります。',
    detail: '',
    link: '#',
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-accent mb-2" />,
    title: '経営者限定ハイレベル交流会',
    description: '高品質な交流イベントを定期開催し、新たなパートナーシップ構築を支援します。',
    detail: '開催予定が立ちましたらご連絡いたします。',
    link: '#',
  },
  {
    icon: <NewspaperIcon className="w-8 h-8 text-accent mb-2" />,
    title: '弊社メディア・ハウスリスト活用事業促進企画',
    description: '人材採用や商品サービスのPRなどを弊社メディアや自社リストで実施。',
    detail: '詳細はみかみにご相談ください。',
    link: '#',
  },
]

export default function SpecialPlan() {
  return (
    <section className="py-24 bg-gray-50" id="specialplan">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary"
        >
          TeamBaseサービス利用者限定プラン
        </motion.h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-7 shadow hover:shadow-lg transition-shadow flex flex-col items-start card"
            >
              {plan.icon}
              <div className="text-lg font-bold mb-1 text-primary">{plan.title}</div>
              <div className="text-gray-700 text-base mb-2">{plan.description}</div>
              {plan.detail && <div className="text-gray-500 text-sm mb-2">{plan.detail}</div>}
              {plan.link && plan.link !== '#' && (
                <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-bold hover:underline mt-auto">詳細を見る</a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 