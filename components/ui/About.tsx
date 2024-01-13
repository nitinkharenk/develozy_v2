import React from 'react'
import Image from 'next/image'
import { maxHeaderSize } from 'http'

export const About = () => {
    return (
        <>
            <div className=" bg-cover lg:bg-cover pb-20 pt-40 lg:bg-center bg-[url('/aboutbg.jpg')]">

                <h1 className=" text-center text-4xl mb-8 text-white font-['Amaranth']  md:text-5xl xl:text-6xl dark:text-white">About US</h1>
                <h1 className="text-white text-center lg:text-3xl">We're A Leading Digital Marketing Solutions Company</h1>
            </div>
            <div className="lg:flex py-32 px-8  bg-blue-50">
                <div>
                    <h1 className="text-center text-4xl font-bold px-2 lg:px-40 py-4"> Who We Are</h1>
                    <h1 className="text-center px-2 lg:px-40 py-4">Develozy is a top-rated website design, digital marketing, and SEO company in Indore, India. In simple words, we are a full-service digital marketing agency. Our team consists of passionate and creative designers, developers, and business growth strategists.</h1>
                </div>
                <div>
                    <h1 className="text-center text-4xl font-bold px-2 lg:px-40 lg:py-4 pt-24"> What We Do.</h1>
                    <h1 className="text-center px-2 lg:px-40 lg:py-4 py-8">The internet is our passion, and we are enthusiastic about helping companies reach their goals in an organized and effective way through our digital marketing services. We build custom websites & provide SEO services that fit the needs & goals of our client's companies.</h1>
                </div>

            </div>
            <div className=' py-32 '>
                <h1 className="text-center text-4xl font-bold">Our Mission & Vision</h1>
                <h1 className="text-center px-2 lg:px-40 lg:py-10 py-8">Our mission is to help businesses get results-driven digital marketing, SEO & web designing services. We envision a future where every local business has a revenue-generating online presence. ABS is here to empower startups and enterprises with proven digital marketing strategies and solutions that we have learned, discovered, and optimized in our 10+ years of experience in the industry. We help businesses get online effortlessly and accelerate their business growth. With each project, we help take India one tiny step closer to Digital India.</h1>
            </div>
            <div className='text-center lg:py-32 px-10 py-20 lg:px-96 bg-blue-50'>
                <h1 className='text-4xl font-bold py-10'>We keep the focus on driving results.</h1>
                <h1>Our team at Develozy is made up of top-notch digital marketers, website designers, web developers, and SEO specialists. Getting real results online is what we excel at. We also keep the focus on the metrics that mean the most, metrics like organic traffic, online engagement,  leads, calls, and revenue generated. We know that hitting these goals is what helps businesses grow. We measure our performance in terms of our client's success. As a full-service digital marketing and website development and search engine optimization (SEO) agency we help small businesses, startups, as well as large enterprises, achieve their online goals objectively.</h1>
                <h1>Through our 10+ years of experience as web designers and SEO experts, we've also learned that while each digital marketing channel has its own set of advantages, they all work best when strategically paired with other channels. That's why we offer full digital marketing services including web design, SEO, PPC Management, online growth hacking etc to our clients and use a combination of digital channels to increase visibility, conversions, and revenue.</h1>
            </div>
            <h1 className="text-center text-indigo-600 font-[Nanum Myeongjo] font-bold text-3xl px-8 lg:text-5xl py-32">Our 6 Steps Digital Marketing Services Execution Process</h1>
            <div className=' grid pb-32 px-12 lg:px-40 gap-10 grid-cols-1 lg:grid-cols-3'>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">01</p>
                    <p className="absolute top-1/4  text-2xl  text-gray-800">
                        Discover
                    </p>
                    <p className='py-14 text-gray-800'>We extensively study where your business is and where you wish to take your business in its growth journey.  We take time to understand your business, products, services, locations, market, audience, growth opportunities, branding, marketing, and sales current status along with your goals and objectives.</p>
                </div>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">02</p>
                    <p className="absolute  top-1/4  text-2xl  text-gray-800">
                    Define
                    </p>
                    <p className='py-14 text-gray-800'>We start out by defining the necessary requirements for your project like web design, SEO & digital marketing. Specific deliverables are agreed upon and the web design, organic growth through SEO, digital marketing, or online branding strategy is put in place.</p>
                </div>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">03</p>
                    <p className="absolute  top-1/4  text-2xl  text-gray-800">
                    Design
                    </p>
                    <p className='py-14 text-gray-800'>After the goals, specifications and requirements have been assessed we move into designing the strategy and digital products such as the brand website, set up SEO, and social media integration of the website.</p>
                </div>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">04</p>
                    <p className="absolute  top-1/4  text-2xl  text-gray-800">
                        Develop
                    </p>
                    <p className='py-14 text-gray-800'>In the development stage, the finalized strategy is handed off to the development team to develop the back-end systems and digital products.</p>
                </div>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">05</p>
                    <p className="absolute  top-1/4  text-2xl  text-gray-800">
                        Deploy
                    </p>
                    <p className='py-14 text-gray-800'>We deploy and make sure your team understands the functionality of the strategies and products deployed in your business.</p>
                </div>
                <div className="relative">
                    <p className="text-7xl  text-gray-300">06</p>
                    <p className="absolute  top-1/4  text-2xl  text-gray-800">
                    Deliver
                    </p>
                    <p className='py-14 text-gray-800'>We handover the project to you and so you can step on that accelerator and watch your business fly to the next level.</p>
                </div>
                
            </div>


        </>
    )
}
