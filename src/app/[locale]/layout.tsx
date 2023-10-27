import type { Metadata } from 'next'

import '../../styles/global.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | UAB',
    default: 'Home | UAB',
  },
  description: `
    United Atomic Bank provides accessible, 
    strategic and highly individualized services, 
    along with a customer experience that goes beyond the numbers. 
    And that makes all the difference.`,
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
}

export function generateStaticParams() {
  return [{ locale: 'en-US' }, { locale: 'pt-BR' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
