import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import dish4 from '../assets/dish4.png';



  const menuItems = [
    {
      image: dish1,
      title: 'Burger for you!',
      description:
        'A savory delight, the burger melds seasoned meat and artisanal bread with gourmet toppings for a symphony of flavours in every bite.',
    },
    {
      image: dish2,
      title: 'Burger and Fries to the rescue!',
      description:
        'Indulged in burger bliss: savory patty nestled in a fluffy bun. Accompanied by crispy, golden fries. Satisfaction, served.',
    },
    {
      image: dish3,
      title: 'Irresistible Ravioli: One fine meal!',
      description:
        'Savour the flavour of our mouthwatering ravioli paired with delicious sauces. Taste perfection in every bite!',
    },
    {
      image: dish4,
      title: 'Biryani for all!',
      description:
        'Embark on a flavour journey with our biryani: rich, aromatic, irresistible, where spices weaves tales and rice whispers flavours.',
    },
  ];


const Items = () => {
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
      id="menu"
      className="w-full h-fit bg-slate-950 px-12 lg:px-20 lg:py-24 py-20 flex flex-col justify-center items-center gap-10"
    >
      <h1 data-aos="zoom-in" className="text-white font-bold text-6xl text-center">
        View Our Lip-smacking<span className="text-green-500 italic"> Delicacies</span>
      </h1>
      <p data-aos="slide-up" className="text-white font-semibold text-2xl text-center">
        "DFoodAPP: Where Every Bite is a Celebration!"
      </p>
      <div
        id="grids"
        className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10"
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            data-aos="slide-up"
            data-aos-delay={200 * (index + 1)}
            className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-2xl"
          >
            <img src={item.image} alt="Dish image" />
            <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
              <h1 className="text-white font-bold text-2xl mt-4 text-center">{item.title}</h1>
              <p className="text-white font-semibold text-lg text-center">{item.description}</p>
              <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 text-white hover:text-black font-bold mt-2">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Items;
