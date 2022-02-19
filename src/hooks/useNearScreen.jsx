import { useEffect, useState, useRef } from 'react'

export function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      (typeof window.IntersectionObserver === 'function')
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(onChange, { rootMargin: distance })
      element && observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
