"use client"

import { useEffect, useRef, useState } from "react"

export function useReveal(options: IntersectionObserverInit = { threshold: 0.12 }) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(entry.target)
        }
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible }
}
