'use client'

import { HeroHome } from '@/components/HomePage/HeroHome'
import { NavBar } from '@/components/HomePage/NavBar'

export default function Home() {
  return (
    <div className="bg-white">
      <header>
        <NavBar />
      </header>

      <main>
        <section>
          <HeroHome />
        </section>
      </main>
    </div>
  )
}
