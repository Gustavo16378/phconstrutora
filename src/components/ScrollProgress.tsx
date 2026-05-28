import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const sc = h.scrollTop || document.body.scrollTop
      const total = (h.scrollHeight - h.clientHeight) || 1
      setHeight(sc / total * 100)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 bottom-0 right-0 w-[3px] z-[60] pointer-events-none"
      style={{ background: 'rgba(17,17,17,.06)' }}
      aria-hidden="true"
    >
      <div
        className="w-full transition-[height] duration-[80ms] linear"
        style={{
          height: `${height}%`,
          background: '#1565C0',
          boxShadow: '-2px 0 12px rgba(21,101,192,.45)',
        }}
      />
    </div>
  )
}
