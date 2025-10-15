"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

const LINKS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export function SiteHeader() {
  const onJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 72 // sticky header height
      const rect = el.getBoundingClientRect()
      const target = window.scrollY + rect.top - headerOffset
      window.scrollTo({ top: target, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={onJump("home")} className="font-semibold tracking-tight text-foreground">
          {"<"}YourName{"/>"}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={onJump(l.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact" onClick={onJump("contact")}>
              Hire Me
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
