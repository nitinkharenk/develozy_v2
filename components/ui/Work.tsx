import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <><section className="w-full bg-indigo-700  bg-[url('/workbg.png')] bg-cover bg-center bg-no-repeat text-white">
      
  <div className="container mx-auto flex flex-col gap-10 px-5 py-12 sm:py-20 md:px-16 md:py-36 lg:gap-16">
    <div>
      <span className="block text-center text-sm font-semibold uppercase tracking-widest text-indigo-950">WHATS THE FUNCTION</span>
      <h2 className="my-3 text-center  text-2xl font-semibold sm:text-4xl">Let's see how it works</h2>
    </div>
    <div className="grid gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
      <div className="relative">
        <div className="mx-auto flex w-[90%] flex-col gap-3 text-center sm:w-4/5 md:mx-0 md:w-full md:gap-5 md:text-left">
          <span className="mx-auto w-fit rounded-full bg-white px-4 py-4 text-3xl font-bold text-blue-800 md:mx-0">01</span>
          <h2 className="text-xl  font-semibold leading-relaxed"> Select A Package</h2>
          <p className="leading-loose ">Visit our pricing plan or speak to our company representative to discuss your project or request add-ons to existing packages.</p>
        </div>
        <Image className="hidden absolute top-2 left-[4.5rem] xl:block" src="arrow.svg" width={200} height={100} alt={''} />
           </div>
      <div className="relative">
        <div className="mx-auto flex w-[90%] flex-col gap-3 text-center sm:w-4/5 md:mx-0 md:w-full md:gap-5 md:text-left">
          <span className="mx-auto w-fit rounded-full bg-white px-4 py-4 text-3xl font-bold text-blue-800 md:mx-0">02</span>
          <h2 className="text-xl  font-semibold leading-relaxed">Discuss Project Requirements</h2>
          <p className="leading-loose ">Upon selection, you’re assigned a dedicated project handler who works to bridge any existing gaps between the customer and the specialists.</p>
        </div>
        <Image className="hidden absolute top-7 left-[4.8rem] xl:block" src="arrow.svg" width={205} height={300} alt={''} />
      </div>
      <div className="relative">
        <div className="mx-auto flex w-[90%] flex-col gap-3 text-center sm:w-4/5 md:mx-0 md:w-full md:gap-5 md:text-left">
          <span className="mx-auto w-fit rounded-full bg-white px-4 py-4 text-3xl font-bold text-blue-800 md:mx-0">03</span>
          <h2 className="text-xl  font-semibold leading-relaxed">Expect Timed Deliverables</h2>
          <p className="leading-loose ">We’re eager to know your feedback on the current project progress as it helps ensure we’re headed in the right direction.</p>
        </div>
        <Image className="hidden absolute top-7 left-[4.8rem] xl:block" src="arrow.svg" width={205} height={300} alt={''} />
      </div>
      <div className="mx-auto flex w-[90%] flex-col gap-3 text-center sm:w-4/5 md:mx-0 md:w-full md:gap-5 md:text-left">
        <span className="mx-auto w-fit rounded-full bg-white px-4 py-4 text-3xl font-bold text-blue-800 md:mx-0">04</span>
        <h2 className="text-xl  font-semibold leading-relaxed">Finalize And Publish</h2>
        <p className="leading-loose ">Now that you’re happy with the quality of work being produced at our end, it’s time to make things official by posting online.</p>
      </div>
      <a href="#" className="inline-flex items-center animate-bounce  justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-950 hover:bg-indigo-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get FREE Consultation
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

    </div>
  </div>
</section>



    </>
  )
}

export default Work