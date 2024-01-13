import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


 

const hero = () => {
  return (
         <>
         <section className="bg-blue-50 dark:bg-gray-900">
    <div className="l grid max-w-screen-xl px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:py-40 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl text-indigo-950 font-['Amaranth']  md:text-5xl xl:text-6xl dark:text-white">Elevate Your Brand<span className="text-indigo-950 text-4xl xl:text-6xl font-normal font-['Amaranth']"> Presence with</span><span className="text-indigo-600 text-4xl xl:text-6xl font-normal font-['Amaranth']"> Creative Websites</span></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We believe that the highest standards make the happiest customers, which is why we work hard to perfect our services. Our state-of-the-art digital approach allows you to achieve outstanding results for your business.</p>
            <a href="#" className="inline-flex animate-bounce  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-950 hover:bg-indigo-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get FREE Consultation
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
             
        </div>
        <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="frame.svg" alt="mockup" width={500} height={100}/>
        </div>                
    </div>
</section>
        


         
         </>
  )
}

export default hero