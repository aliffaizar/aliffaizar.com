import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <main className='w-full pb-28 pt-4 lg:py-12 xl:py-16'>{children}</main>
}
