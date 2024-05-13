import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Reusable component for contact method
const ContactMethod = ({ icon, title, description, contact, delay }) => {
  return (
    <div data-aos="slide-up" data-aos-delay={delay} className='flex flex-col justify-center items-center gap-4'>
      <div className='contact-icon bg-green-500 px-6 py-6 rounded-full hover:bg-orange-500 cursor-pointer text-center'>
        <i className={`${icon} fa-xl`}></i>
      </div>
      <h1 className='text-white font-bold text-2xl'>{title}</h1>
      <p className='text-white font-normal text-xl text-center'>{description}</p>
      <p className='text-orange-500 text-2xl font-bold text-center underline cursor-pointer'>{contact}</p>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section id='contact' className='bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-16'>
      <ContactMethod
        icon="fa-solid fa-phone"
        title="Call Us"
        description="24*7 at your service."
        contact="+91 987 654 3210"
        delay="500"
      />
      <ContactMethod
        icon="fa-solid fa-location-dot"
        title="Reach Us"
        description="Visit our location."
        contact="18, DCodeStreet, India."
        delay="600"
      />
      <ContactMethod
        icon="fa-regular fa-envelope"
        title="Mail Us"
        description="Send mails to us."
        contact="DFoodApp@gmail.com"
        delay="700"
      />
    </section>
  );
};

export default Contact;
