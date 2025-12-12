import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const contactInfo = [
    { 
      id: 1, 
      icon: "fa-solid fa-phone", 
      title: "Call Us", 
      subtitle: "24*7 at your service.", 
      text: "+91 987 654 3210",
      link: "tel:+919876543210",
      padding: "px-6 py-6"
    },
    { 
      id: 2, 
      icon: "fa-solid fa-location-dot", 
      title: "Reach Us", 
      subtitle: "Visit our location.", 
      text: "518, DCodeStreet, India.",
      link: "#",
      padding: "px-7 py-6"
    },
    { 
      id: 3, 
      icon: "fa-regular fa-envelope", 
      title: "Mail Us", 
      subtitle: "Send mails to us.", 
      text: "DFoodApp@gmail.com",
      link: "mailto:divyamsharmaworks@gmail.com",
      padding: "px-6 py-6"
    },
  ];

  return (
    <section 
      id='contact' 
      className='bg-slate-950 w-full px-5 lg:px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-20'>
      {contactInfo.map((item) => (
        <div 
          key={item.id} 
          data-aos="zoom-up" 
          data-aos-delay="50" 
          className='flex flex-col justify-center items-center gap-4'>
          <div className={`bg-green-500 ${item.padding} rounded-full hover:bg-orange-500 cursor-pointer transition-colors duration-300 text-center`}>
            <i className={`${item.icon} fa-xl text-black`}></i>
          </div>
          <h1 className='text-white font-bold text-2xl'>{item.title}</h1>
          <p className='text-white font-normal text-xl text-center'>{item.subtitle}</p>
          <a 
            href={item.link} 
            className='text-orange-500 text-2xl font-bold text-center underline cursor-pointer hover:text-green-500 transition-colors'>
            {item.text}
          </a>
        </div>
      ))}
    </section>
  );
};

export default Contact;