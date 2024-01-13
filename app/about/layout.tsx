import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { About } from '@/components/ui/About'






const layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
  
    <About />
 
    
    
    <Footer />

    </>
  )
}

export default layout