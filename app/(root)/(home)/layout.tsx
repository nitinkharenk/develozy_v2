import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Portfolio from '@/components/ui/Portfolio'

import Contect from '@/components/ui/Contect'
import Services from '@/components/ui/Services'
import Work from '@/components/ui/Work'




function layout({ children }: { children: React.ReactNode} ) {
  return (
    <>
      <Navbar />
      <Hero />
      {children}

      <Portfolio />

      <Services />
      <Contect />
      <Work />

      <Footer />

    </>
  )
}

export default layout