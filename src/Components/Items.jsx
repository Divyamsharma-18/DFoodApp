import React, { useEffect } from 'react'
import AOS from 'aos'
import dish1 from '../assets/dish1.jpg'
import dish2 from '../assets/dish2.jpg'
import dish3 from '../assets/dish3.jpg'
import dish4 from '../assets/dish4.png'
import 'aos/dist/aos.css'

const Items = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  const dishItems = [
    { 
      img: dish1, 
      title: "Burger for you!", 
      desc: "A savory delight, the burger melds seasoned meat and artisanal bread with gourmet toppings." 
    },
    { 
      img: dish2, 
      title: "Burger and Fries!", 
      desc: "Indulged in burger bliss: savory patty nestled in a fluffy bun. Accompanied by crispy, golden fries." 
    },
    { 
      img: dish3, 
      title: "Irresistible Ravioli!", 
      desc: "Savour the flavour of our mouthwatering ravioli paired with delicious sauces. Taste perfection in every bite!" 
    },
    { 
      img: dish4, 
      title: "Biryani for all!", 
      desc: "Embark on a flavour journey with our biryani: rich, aromatic, irresistible, where spices weaves tales." 
    },
  ];
  return (
    <section id="menu" className='w-full bg-slate-950 px-12 lg:px-20 lg:py-24 py-20 flex flex-col justify-center items-center gap-10'>
      <h1 data-aos="zoom-in" className='text-white font-bold text-6xl text-center'>
        View Our Lip-smacking<span className='text-green-500 italic'> Delicacies</span></h1>
      <p data-aos="zoom-up" className='text-white font-semibold text-2xl text-center'>"DFoodAPP: Where Every Bite is a Celebration!"</p>
      <div id='grids' className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center w-full max-w-6xl'>
        {dishItems.map((item, index) => (
          <div 
            key={index}
            data-aos="slide-up" 
            data-aos-delay="200" 
            className='bg-slate-900 w-full max-w-[500px] h-[700px] rounded-2xl overflow-hidden shadow-lg flex flex-col' >
            <img 
              src={item.img} 
              alt={item.title} 
              className='w-full h-[400px] object-center' />
            <div className='flex flex-col justify-between items-center p-6 flex-grow'>
              <h1 className='text-white font-bold text-2xl text-center'>{item.title}</h1>
              <p className='text-white font-semibold text-lg text-center line-clamp-3'>
                {item.desc}</p>
              <button className='bg-green-500 px-8 py-3 rounded-full hover:bg-orange-500 text-white hover:text-black font-bold transition-all duration-300'>
                Order Now</button>
            </div></div>
        ))}
      </div>
    </section>
  )
}
export default Items