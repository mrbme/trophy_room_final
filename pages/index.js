import React, { useState, useEffect } from 'react'
import Navbar from '@/components/navbar.js'
import Hero from '@/components/home/hero.js'
import About from '@/components/home/about.js'
import CurrentSeason from '@/components/home/current_season.js'
import Giveaways from '@/components/home/giveaways.js'
import Roadmap from '@/components/home/roadmap.js'
const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CurrentSeason />
      <Giveaways />
      <Roadmap />
    </>
  )
}
export default Index
