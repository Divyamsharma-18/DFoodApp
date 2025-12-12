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
      offset: 100,
      duration: 800,
      easing: "zoom-up",
      delay: 100,
    })
  }, [])

  const galleryItems = [
    { id: 1, text: "Wraps for you!", img: menu1, isBright: true },
    { id: 2, text: "Sea Food", img: menu2, isBright: true },
    { id: 3, text: "Lean range Meals", img: menu3, isBright: true },
    { id: 4, text: "Vegan Food Platters", img: item1, isBright: false },
    { id: 5, text: "Aglio Olio with Shrimp", img: item2, isBright: false },
    { id: 6, text: "Green Nonveg Bowls.", img: item3, isBright: false },
  ];

  return (
    <section id='gallery' className='w-full bg-slate-950 py-28 px-5'>
      <div className='flex flex-wrap justify-center gap-16 max-w-6xl mx-auto'>
        {galleryItems.map((item) => (
          <div 
            key={item.id}
            data-aos="slide-up" 
            data-aos-delay="150" 
            className={`
              flex justify-center items-center bg-center bg-cover 
              lg:h-80 lg:w-80 h-60 w-60 rounded-xl 
              ${item.isBright ? 'brightness-150' : ''} 
            `}
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            <h1 className='text-white font-bold text-3xl text-center px-4'>
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu;