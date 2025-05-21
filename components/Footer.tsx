export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="font-bold text-base">Teambase</div>
        <div className="flex space-x-6 text-sm">
          <a href="https://addness.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:underline">会社情報</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-300 mt-6">&copy; {new Date().getFullYear()} Adnes Inc. All rights reserved.</div>
    </footer>
  )
} 