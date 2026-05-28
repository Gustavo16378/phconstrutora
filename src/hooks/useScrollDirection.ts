import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'down'

export function useScrollDirection(threshold = 8): Direction {
  const [direction, setDirection] = useState<Direction>('up')
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY.current) < threshold) return
      setDirection(y > lastY.current ? 'down' : 'up')
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return direction
}
