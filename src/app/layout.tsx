import Menu from '@/components/nav/Menu'
import { Inter } from 'next/font/google'

import './globals.css'
import 'md-editor-rt/lib/preview.css'

import { META } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: META.title,
  description: META.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='relative flex min-h-screen w-full justify-center bg-black font-sans scroll-smooth'>
          <div className='fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8'></div>
          <div className='fixed top-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8'></div>
          <div className='relative w-full max-w-screen-xl'>
            <div className='relative h-full bg-zinc-800'>
              <div className='h-full w-full px-4 md:px-6 lg:px-8'>
                {children}
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </body>
    </html>
  )
}
