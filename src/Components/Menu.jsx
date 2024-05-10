import React, { useEffect } from 'react'
import AOS from 'aos'
import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'
import 'aos/dist/aos.css'

const Menu = () => {
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
    <section id='gallery' className='w-full bg-slate-950 h-fit px-20 flex py-28 flex-col lg:flex-row justify-center items-center gap-16 lg:flex-wrap'>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60 rounded-xl brightness-150' style={{ backgroundImage: `url('${menu1}')` }}>
        <h1 className='text-white font-bold text-3xl text-center'>Wraps for you!</h1>
      </div>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60  rounded-xl brightness-150' style={{ backgroundImage: `url('${menu2}')` }}>
        <h1 className='text-white font-bold text-3xl text-center'>Sea Food</h1>
      </div>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60  rounded-xl brightness-150' style={{ backgroundImage: `url('${menu3}')` }}>
        <h1 className='text-white text-center font-bold text-3xl'>Lean range Meals</h1>
      </div>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60 rounded-xl' style={{ backgroundImage: `url('${item1}')` }}>
        <h1 className='text-white font-bold text-center text-3xl'>Vegan Food Platters</h1>
      </div>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60 rounded-xl' style={{ backgroundImage: `url('${item2}')` }}>
        <h1 className='text-white font-bold text-3xl text-center'>Aglio Olio with Shrimp</h1>
      </div>
      <div data-aos="slide-up" data-aos-delay="150" className='flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60 rounded-xl' style={{ backgroundImage: `url('${item3}')` }}>
        <h1 className='text-white font-bold text-3xl text-center'>Green Nonveg Bowls.</h1>
      </div>
    </section>
    </>
  )
}

export default Menu;