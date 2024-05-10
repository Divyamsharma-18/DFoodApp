import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        })
      }, [])
  return (
    <section id='contact' className='bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-16'>
        <div data-aos="slide-up" data-aos-delay="500" className='flex flex-col justify-center items-center gap-4'>
            <div id='iconBox' className='bg-green-500 px-6
            py-6 rounded-full hover:bg-orange-500 cursor-pointer text-center'>
            <i class="fa-solid fa-phone fa-xl"></i>
            </div>
            <h1 className='text-white font-bold text-2xl'>Call Us</h1>
            <p className='text-white font-normal text-xl text-center'>24*7 at your service.</p>
            <p className='text-orange-500  text-2xl font-bold text-center underline cursor-pointer'>+91 987 654 3210</p>
        </div>

        <div data-aos="slide-up" data-aos-delay="600" className='flex flex-col justify-center items-center gap-4'>
            <div id='iconBox' className='bg-green-500 px-6
            py-6 rounded-full hover:bg-orange-500 cursor-pointer text-center'>
            <i class="fa-solid fa-location-dot fa-xl"></i>
            </div>
            <h1 className='text-white font-bold text-2xl'>Reach Us</h1>
            <p className='text-white font-normal text-xl text-center'>Visit our location.</p>
            <p className='text-orange-500  text-2xl font-bold text-center underline cursor-pointer'>18, DCodeStreet, India.</p>
        </div>

        <div data-aos="slide-up" data-aos-delay="700" className='flex flex-col justify-center items-center gap-4'>
            <div id='iconBox' className='bg-green-500 px-6
            py-6 rounded-full hover:bg-orange-500 cursor-pointer text-center'>
            <i class="fa-regular fa-envelope fa-xl"></i>
            </div>
            <h1 className='text-white font-bold text-2xl'>Mail Us</h1>
            <p className='text-white font-normal text-xl text-center'>Send mails to us.</p>
            <p className='text-orange-500  text-2xl font-bold text-center underline cursor-pointer'>DFoodApp@gmail.com</p>
        </div>
    </section>
  )
}

export default Contact