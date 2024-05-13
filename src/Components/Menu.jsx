import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import menu1 from '../assets/menu1.jpg';
import menu2 from '../assets/menu2.jpg';
import menu3 from '../assets/menu3.jpg';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpg';
import item3 from '../assets/item3.jpg';


  const menuItems = [
    { image: menu1, title: 'Wraps for you!' },
    { image: menu2, title: 'Sea Food' },
    { image: menu3, title: 'Lean range Meals' },
    { image: item1, title: 'Vegan Food Platters' },
    { image: item2, title: 'Aglio Olio with Shrimp' },
    { image: item3, title: 'Green Nonveg Bowls' },
  ];


const Menu = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);


  return (
    <section
      id="gallery"
      className="w-full bg-slate-950 h-fit px-20 flex py-28 flex-col lg:flex-row justify-center items-center gap-16 lg:flex-wrap"
    >
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          data-aos="slide-up"
          data-aos-delay={150}
          className="flex justify-center items-center bg-center bg-cover lg:h-80 lg:w-80 h-60 w-60 rounded-xl brightness-150"
          style={{ backgroundImage: `url('${menuItem.image}')` }}
        >
          <h1 className="text-white font-bold text-3xl text-center">{menuItem.title}</h1>
        </div>
      ))}
    </section>
  );
};

export default Menu;
