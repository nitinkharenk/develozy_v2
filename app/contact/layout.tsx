import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import Contactus from '@/components/ui/Contactus'









const layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
  
    <Contactus />
     
    
 
    
    
    <Footer />

    </>
  )
}

export default layout