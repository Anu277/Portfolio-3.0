"use client"

export function BackgroundFX() {
  return (
    <div aria-hidden="true">
      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid animate-grid-drift opacity-[0.22]" />
      {/* Accent glow(s) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-accent-glow animate-float-1" />
        <div className="bg-accent-glow animate-float-2" />
      </div>
      {/* Subtle vignette to deepen edges */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-vignette" />
      {/* Diagonal accent beam */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-beam" />
    </div>
  )
}
