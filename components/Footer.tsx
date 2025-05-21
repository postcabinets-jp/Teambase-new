export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.svg" alt="Teambaseロゴ" className="h-7 w-auto" />
          <span className="font-bold text-base">Teambase</span>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="/terms" className="hover:underline">利用規約</a>
          <a href="/privacy" className="hover:underline">プライバシーポリシー</a>
          <a href="/company" className="hover:underline">会社情報</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="X(Twitter)"><img src="/images/x-icon.svg" className="h-5 w-5" /></a>
          <a href="#" aria-label="Facebook"><img src="/images/facebook-icon.svg" className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram"><img src="/images/instagram-icon.svg" className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-300 mt-6">&copy; {new Date().getFullYear()} Adnes Inc. All rights reserved.</div>
    </footer>
  )
} 