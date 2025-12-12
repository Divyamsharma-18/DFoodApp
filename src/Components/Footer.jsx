import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { id: 1, icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/divyam-sharma-6ba700249/' },
    { id: 2, icon: 'fa-brands fa-x-twitter', link: 'https://x.com/Heydivyamsharma' },
    { id: 3, icon: 'fa-brands fa-github', link: 'https://github.com/Divyamsharma-18' },
    { id: 4, icon: 'fa-brands fa-codepen', link: 'https://codepen.io/Divyamsharma-18' },
    { id: 5, icon: 'fa-solid fa-p', link: 'https://peerlist.io/divyamsharma' },
    { id: 6, icon: 'fa-brands fa-youtube', link: 'https://www.youtube.com/@divyamsharma18' },
  ];

  return (
    <>
      <footer className='flex justify-center items-center px-10 lg:px-20 py-10 lg:py-12 flex-col gap-6 bg-slate-800 w-full'>
        <div id='socialIcons' className='flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-8 mt-3'>
          {socialLinks.map((social) => (
            <div 
              key={social.id}
              className='bg-green-500 h-14 w-14 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 flex justify-center items-center'>
               <a href={social.link} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full'>
                <i className={`${social.icon} fa-xl text-black`}></i>
               </a>
            </div>
          ))}
        </div>
      </footer>
      <div className='w-full text-center bg-black p-4 flex flex-col gap-2 justify-center items-center text-white font-semibold'>
        <h1>Copyright 2024 <i className="fa-regular fa-copyright fa-lg"></i> </h1>
        <h1> Developed with <i className="fa-solid text-orange-500 fa-heart fa-lg inline-block translate-y-[1px]"></i> by&nbsp;
          <a target='blank' className='underline' href="https://divyamsharma.netlify.app/">Divyam Sharma</a></h1>
        {showButton && (
          <div
            onClick={scrollToTop}
            id='arrowIcon'
            className='px-2 py-1 bg-orange-500 hover:bg-green-500 rounded-full cursor-pointer fixed bottom-6 right-5 z-50'
          >
            <i className="fa-solid fa-arrow-up fa-xl"></i>
          </div>
        )}
      </div>
    </>
  )
}
export default Footer