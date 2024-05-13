import React, { useEffect } from 'react'
import AOS from 'aos'
import vertical from '../assets/vertical.jpg'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])
  return (
    <>
      <section id='about' className='flex flex-col lg:flex-row justify-center gap-10 lg:py-24 py-20 px-10 lg:px-20 bg-sky-950 w-full h-fit '>
        <div id='left' className='lg:w-1/2 w-full flex flex-col justify-end lg:items-start gap-10'>
          <h1 data-aos="zoom-in" className='text-white text-6xl font-bold'>About 
          <span className='italic text-green-500'>Us</span></h1>
          <h1 data-aos="zoom-in" className='text-white text-xl font-semibold lg:text-start'>Welcome to DFoodApp, where culinary inspiration meets convenience!! 
          <br />
          Delicacies from the best places out there, that too at the best price range.</h1>
          <button data-aos="zoom-in" className='bg-orange-500 px-4 py-3 rounded-full hover:bg-green-500 hover:text-black font-bold mt-4'>ORDER NOW</button>
        </div>
        <div id='aboutImage' data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center lg:w-1/2 w-full'>
          <img src={vertical} alt="About Image" width={500} height={500} className='rounded-xl'/>
        </div>
      </section>
    </>
  )
}

export default About;
