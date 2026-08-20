import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: { type: 'website', locale: 'zh_CN', url: siteConfig.url, siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>
}
