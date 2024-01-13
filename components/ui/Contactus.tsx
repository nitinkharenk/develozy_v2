import React, { useRef, useEffect } from 'react'

import Image from 'next/image'


const Contactus = () => {
   







    return (
        <>
        <section className="min-h-screen flex  text-white bg-cover relative items-center background-image: bg-[url('/aboutbg.jpg')]  ">
        <div className="lg:flex w-auto bg-blue-900  py-96 pl-32 pr-16 h-auto  hidden ">
        
            <div className="w-full ">
                <h1 className="text-1xl pt-8  font-bold text-left tracking-wide">ADDRESS:</h1>
                <p className="text-3xl ">Scheme 78, Vijaynagar, Indore (M.P.)</p>
                <h1 className="text-1xl pt-8 font-bold text-left tracking-wide">Email:</h1>
                <a href="mailto:info@develogy.com" className="text-3xl">info@develogy.com</a>
                <h1></h1>
                <a href="mailto:support@develogy.com" className="text-3xl">Support@develogy.com</a>
                <h1 className="text-1xl pt-8 font-bold text-left tracking-wide">India Phone:</h1>
                <a href="tel:919981738569" className="text-3xl">91-99817-38569</a>
            </div>
            
                </div>
           
             
            
            <div className="py-32 rounded-lg ml-auto w-full lg:py-32  px-4 h-auto">
                <div className="mx-auto  rounded-lg drop-s2  shadow-2xl dark:bg-gray-800 md:p-auto">
                    <div className="my-4 text-sm font-light rounded-lg border-2 border-yellow-500 text-gray-500 dark:text-gray-400">
                        <section className="bg-white rounded-lg  dark:bg-gray-900">
                            <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md ">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact sales</h2>
                                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Find out how Develozy can help your business get to the next level.</p>
                                <form action="#"  className="space-y-4 lg:grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                        <input type="text" id="fname" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                        <input type="text" id="lname" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                                        <input type="text" id="company" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                        <input type="tel" id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+1234567890" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-500 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                </form>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            
            
            </section>


        </>
    )
}

export default Contactus