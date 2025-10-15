"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type CommandItem = {
  label: string
  href: string
  keywords?: string[]
}

const DEFAULT_ITEMS: CommandItem[] = [
  { label: "Home", href: "#home", keywords: ["start", "landing"] },
  { label: "Work", href: "#work", keywords: ["projects", "portfolio"] },
  { label: "Skills", href: "#skills", keywords: ["languages", "frameworks"] },
  { label: "Experience", href: "#experience", keywords: ["intern", "timeline"] },
  { label: "About", href: "#about", keywords: ["bio", "profile"] },
  { label: "Contact", href: "#contact", keywords: ["hire", "email"] },
]

export function CommandPalette({
  items = DEFAULT_ITEMS,
}: {
  items?: CommandItem[]
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const onKey = useCallback((e: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC")
    if ((isMac && e.metaKey && e.key.toLowerCase() === "k") || (!isMac && e.ctrlKey && e.key.toLowerCase() === "k")) {
      e.preventDefault()
      setOpen((v) => !v)
    }
    if (e.key === "Escape") setOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onKey])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((it) => {
      const hay = [it.label, ...(it.keywords || [])].join(" ").toLowerCase()
      return hay.includes(q)
    })
  }, [items, query])

  const go = (href: string) => {
    setOpen(false)
    if (href.startsWith("#")) {
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    if (typeof window !== "undefined") {
      window.location.href = href
    }
  }

  if (!open) return null

  return (
    <div className={cn("fixed inset-0 z-50", "bg-background/80 backdrop-blur-sm")} aria-modal="true" role="dialog">
      <div className="mx-auto mt-24 w-full max-w-xl px-4">
        <div className={cn("rounded-xl border", "bg-card text-card-foreground border-border", "shadow-lg")}>
          <div className="p-3 border-b border-border">
            <label htmlFor="cmdk" className="sr-only">
              Search
            </label>
            <input
              id="cmdk"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search… (Press Esc to close)"
              className={cn(
                "w-full bg-transparent outline-none",
                "text-base md:text-sm",
                "placeholder:text-muted-foreground",
              )}
              aria-label="Command palette search"
            />
          </div>
          <ul className="max-h-72 overflow-auto">
            {results.length === 0 ? (
              <li className="px-3 py-3 text-muted-foreground">No results</li>
            ) : (
              results.map((it) => (
                <li key={it.href}>
                  <button
                    onClick={() => go(it.href)}
                    className={cn(
                      "w-full text-left px-3 py-3",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-ring",
                      "rounded-none",
                    )}
                  >
                    <span className="font-medium">{it.label}</span>
                    {it.keywords?.length ? (
                      <span className="ml-2 text-muted-foreground text-sm">{it.keywords.join(" • ")}</span>
                    ) : null}
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="px-3 py-2 border-t border-border text-muted-foreground text-xs">
            Tip: Press Cmd/Ctrl + K to toggle
          </div>
        </div>
      </div>
    </div>
  )
}
