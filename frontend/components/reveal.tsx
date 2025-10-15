"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

type Props = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: ReactNode
  threshold?: number
  delayMs?: number
}

export function Reveal({ as: Tag = "section", className = "", children, threshold = 0.2, delayMs = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delayMs])

  return (
    <Tag
      ref={ref as any}
      className={[
        "transition-transform duration-700 ease-out",
        "opacity-0 translate-y-4",
        visible ? "opacity-100 translate-y-0" : "",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  )
}
