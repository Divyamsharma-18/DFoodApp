import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner1 from '../assets/banner1.jpg'

const Banner = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        })
      }, [])
  return (
    <section className='w-full bg-black h-fit flex justify-between items-center text-white px-10 gap-8 lg:px-40 py-40 bg-cover bg-center' style={{ backgroundImage: `url('${Banner1}')` }}>
        <div className='flex flex-col gap-8 justify-center items-start w-full'>
        <div data-aos="zoom-in" id='box-circle' className='bg-green-500 p-12 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6 hover:bg-orange-500 cursor-pointer'>
          <h1 className='text-black text-center font-bold text-5xl'>40% FLAT OFF</h1>
        </div>
        <h1 data-aos="slide-up" data-aos-delay="300" className='lg:text-6xl text-5xl font-semibold '>Keep yourself updated with all these irresistible offers.</h1>
        <p data-aos="slide-up" data-aos-delay="400" className='text-xl lg:text-2xl font-semibold'>Craving delicious food? Look no further! One stop for all your cravings is DFoodApp. It's offering on exclusive deal just for you. Order now and enjoy mouthwatering meals delivered straight to your door. Don't miss out - subacribe to our newsletter today.</p>
        <div data-aos="slide-right" data-aos-delay="600" id='form' className='flex flex-col lg:flex-row justify-start items-start w-full gap-6 mt-3'>
            <input type="email" className='p-4 text-black font-bold w-full lg:w-1/2 rounded-full' placeholder='Enter Email'/>
            <button type="submit" className='bg-green-500 hover:bg-orange-500 px-10 py-4 rounded-full text-black font-bold'>Subscribe</button>
        </div>
        </div>
    </section>
  )
}

export default Banner