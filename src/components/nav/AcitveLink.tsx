import { useEffect, useState } from 'react'

export default function ActiveLink({
  children,
  url,
}: {
  children: React.ReactNode
  url: string
}) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (window.location.pathname === url) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [url])

  return (
    <a href={url} className={isActive ? 'text-cyan-500' : 'text-white'}>
      {children}
    </a>
  )
}
