import type { Metadata } from "next"
import { Mulish } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import "../styles/globals.css"
import Header from "@/components/header/Header"

export const metadata: Metadata = {
  title: "SGPortfolio",
  description: "Stasg portfolio application",
  icons: '/icons/icon.jpg',
}

const mulish = Mulish({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

config.autoAddCss = false

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
