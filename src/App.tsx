import React from 'react'
import { Navigation, Hero, AIEnginesMarquee, Problem, Services } from '@/components'
import { useMagneticCursor } from '@/hooks'

function App() {
  const { cursorRef, ringRef } = useMagneticCursor()

  return (
    <div className="relative overflow-x-hidden">
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Main content */}
      <Navigation />
      <Hero />
      <AIEnginesMarquee />
      <Problem />
      <Services />
    </div>
  )
}

export default App
