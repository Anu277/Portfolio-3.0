import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anurag Bheemani - Full Stack Developer & AI Engineer",
  description: "Computer Science student at JNTU Hyderabad specializing in Full Stack Development, AI/ML, and Backend Engineering. Experience with MERN stack, Python, AI chatbots, and scalable web applications.",
  keywords: "Anurag Bheemani, Full Stack Developer, AI Engineer, MERN Stack, Python, Machine Learning, React, Node.js, MongoDB, JavaScript, Backend Developer, Computer Science, JNTU Hyderabad, Telangana India",
  authors: [{ name: "Anurag Bheemani" }],
  creator: "Anurag Bheemani",
  publisher: "Anurag Bheemani",
  robots: "index, follow",
  openGraph: {
    title: "Anurag Bheemani - Full Stack Developer & AI Engineer",
    description: "Computer Science student specializing in Full Stack Development, AI/ML, and Backend Engineering",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Bheemani - Full Stack Developer & AI Engineer",
    description: "Computer Science student specializing in Full Stack Development, AI/ML, and Backend Engineering",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
