import type { Metadata } from "next"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import "../styles/globals.css"

import Header from "@/components/header/Header"

export const metadata: Metadata = {
  title: "SGPortfolio",
  description: "Stasg portfolio application",
  icons: '/icons/icon.jpg',
}

config.autoAddCss = false

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
