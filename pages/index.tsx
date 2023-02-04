import React from 'react'
import Hero from '../components/molecules/Hero'
import NavbarHero from '../components/molecules/NavbarHero'
import Pricing from '../components/molecules/pricing'

export default function Home() {
  return (
    <div>
      <NavbarHero />
      <Hero/>
      <Pricing />
    </div>
  )
}
