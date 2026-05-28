import { useEffect, useRef } from 'react'

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('opacity-100')
          element.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
