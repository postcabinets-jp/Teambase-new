import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-primary">Teambase</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#problems" className="hover:text-accent transition">こんな悩みは？</a>
          <a href="#why" className="hover:text-accent transition">成長が止まる理由</a>
          <a href="#growth" className="hover:text-accent transition">成長ストーリー</a>
          <a href="#solution" className="hover:text-accent transition">解決のヒント</a>
          <a href="#pitfall" className="hover:text-accent transition">よくある失敗</a>
          <a href="#faq" className="hover:text-accent transition">よくある質問</a>
        </nav>
        <Link href="#cta" className="ml-4 bg-accent text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-600 transition-all">資料請求</Link>
      </div>
    </header>
  )
} 