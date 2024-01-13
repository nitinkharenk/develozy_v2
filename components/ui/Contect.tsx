import React from 'react'

const Contect = () => {
  return (
          <>
              <div id="id-contact" className=" w-full lg:flex md:inset-0 bg-cover bg-center  h-modal md:h-full lg:bg-[url('/telephone1.png')]">
              <div className="lg:pt-60 lg:pl-96 px-4  " > 
                 <h1 className="max-w-2xl justify-center text-4xl text-indigo-950 font-['Amaranth']  md:text-5xl xl:text-5xl dark:text-white">Kickstart Your Digital Journey with<span className="text-indigo-600 text-4xl xl:text-6xl font-normal font-['Amaranth']"> Develozy.</span></h1>
               <h1 className="text-2xl pt-4">We’re Available to Help You.</h1>
               <div className="lg:pt-20 animate-bounce  lg:pl-8">
                 <a className="md:w-32  bg-blue-800 hover:bg-green-500 text-white font-bold py-3 px-12 rounded-lg  transition ease-in-out duration-300" href="tel:+919301947671">Call Us</a>
               </div>
                </div>
  <div className="py-8 rounded-lg lg:ml-auto lg:py-2 lg:mx-24 px-4 lg:w-96 h-2/5">
      <div className="mx-auto  rounded-lg drop-s2  shadow-2xl dark:bg-gray-800 md:p-auto">
          <div className="my-4 text-sm font-light rounded-lg border-2 border-yellow-500 text-gray-500 dark:text-gray-400">
          <section className="bg-white rounded-lg dark:bg-gray-900">
  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We are here to help!</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
             
      </div>
      </div>
  </div>
</div>
      
          
          
          </>
  )
}

export default Contect