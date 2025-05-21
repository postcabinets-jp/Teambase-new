import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamBase - 属人経営から脱出し、チームで売り上げを伸ばす',
  description: 'たった2年で年商10億突破！急成長したアドネス株式会社の"裏側"の仕組みを公開。売上3倍を実現したスクール事業者多数。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 