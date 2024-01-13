import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Services from '@/components/ui/Services'






const layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
  
    <Services />
 
    
    
    <Footer />

    </>
  )
}

export default layout