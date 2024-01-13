import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <>
        <div className="w-full relative">
                <div className="before:w-full pb-16 before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">

            <div id='id-services' className='pt-32 pb-32'>
                <h1 className='text-center text-4xl font-bold  '>Our Services</h1>

                <h1 className='text-center  px-10 pt-10 md:px-60'>Any business that wants to use digital marketing must have access to a diverse range of skills and resources. Allow an expert team on Digital Marketers to handle the talent and experience intensive tasks as we collaborate with you to determine which online marketing services will be most useful to you and how to use each internet marketing channel to its fullest potential.</h1>
            </div>
            <div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 pb-10 px-10 md:px-36 gap-8">
                        <div className='relative md:w-96  bg-white px-6 pt-10 pb-8 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>Website Design Services</h1>
                            <p className='px-3 text-center'>Your business is unique and you need a website that can help separate you from the competition. At Develozy we have helped 100s of businesses ranging from local stores to global enterprises get online and distinguish their brand with a unique website.</p>
                            <h1 className='text-end pt-20'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>
                        </div>
                        <div className='relative md:w-96 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 bg-white shadow-xl  px-6 pt-10 pb-8  ring-2 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>SEO Service</h1>
                            <p className='px-3 text-center'>Search Engine Optimization is the most effective long-term digital marketing strategy for startups and SMEs. Develozy provides all SEO services like Local SEO, National SEO, Global SEO, eCommerce SEO, Blog SEO, and more. Contact us today today to improving your SEO.</p>
                            <h1 className='text-end pt-20'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>

                        </div>
                        <div className='relative  md:w-96 bg-white px-6 pt-10 pb-8 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>Digital Marketing</h1>
                            <p className='px-3 text-center'>Develozy is one of the most recommended Digital Marketing agencies in India. We have dedicated SEO, PPC, Email, and Social Media marketing teams. If you want to highlight your brand, upgrade your web presence, grow your traffic, propel your conversions, and boost your revenue, contact us today.</p>
                            <h1 className='text-end pt-12'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>
                        </div>
                        <div className='relative md:w-96  bg-white px-6 pt-10 pb-8 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>Logo Design & Branding</h1>
                            <p className='px-3 text-center'>A brand identity is to a company what personality is to a person. People are remembered by personality and Companies are remembered by their Brand identities. With our creative logo & brand identity design services, we help your business stand out from the crowd, engage its prospects, and build trust and reliability in the market.</p>
                            <h1 className='text-end pt-32'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>

                        </div>
                        <div className='relative  md:w-96 bg-white px-6 pt-10 pb-8 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>eCommerce Web Development</h1>
                            <p className='px-3 text-center'>Develozy has been an eCommerce website design and development expert in Indore since 2020. Take your e-commerce efforts to the next level to be the best in your niche or start your full-on digital transformation. When it comes to implementing the best eCommerce solutions for your online business needs, we can provide you with dedicated website designers and developers.</p>
                            <h1 className='text-end pt-10'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>
                        </div>
                        <div className='relative  md:w-96 bg-white px-6 pt-10 pb-8 transform transition-transform duration-300 hover:scale-105 shadow-indigo-500 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
                            <h1 className='text-center text-2xl font-bold py-3'>Digital Growth Hacking</h1>
                            <p className='px-3 text-center'>Pricing Strategy, Product Strategy, Sales Model, Marketing Model, Competitive Intelligence, and Brand Development, are all the services you need to dominate your market under one roof. Develozy pioneer in business growth hacking, business development, and strategy services. We have helped small businesses and enterprises grow successfully and sustainably.</p>
                            <h1 className='text-end pt-24'>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                                    </svg>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          
        </div>
      </div>
      </div>









            </div>
            </div>






        </>
    )
}

export default Services