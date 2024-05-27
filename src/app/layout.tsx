import type { Metadata } from "next"

import "../styles/globals.css"

export const metadata: Metadata = {
  title: "SGPortfolio",
  description: "Stasg portfolio application",
  icons: ''
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
