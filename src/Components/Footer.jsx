import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
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
    <footer className='flex justify-center items-center px-10 lg:px-20 py-10 lg:py-12 flex-col gap-6 bg-slate-800 w-full'>
        <div id='socialIcons' className='flex flex-row justify-start items-start gap-12 mt-3'>
            <div  id='iconBox' className='bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer'>
            <i class="fa-brands fa-facebook fa-xl"></i>
            </div>
            <div id='iconBox' className='bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer'>
            <i class="fa-brands fa-instagram fa-xl"></i>
            </div>
            <div id='iconBox' className='bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer'>
            <i class="fa-brands fa-youtube fa-xl"></i>
            </div>
            <div id='iconBox' className='bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer'>
            <i class="fa-brands fa-x-twitter fa-xl"></i>
            </div>
        </div>
    </footer>

    <div className='w-full text-center bg-black p-4 flex flex-col gap-2 justify-center items-center text-white font-semibold'>
        <h1>Copyright 2024 <i class="fa-regular fa-copyright fa-lg"></i> </h1>
        <h1> Developed with <i class="fa-regular fa-heart fa-lg"></i> by Divyam Sharma.</h1>
        <div id='arrowIcon' className='px-2 py-1 bg-orange-500 hover:bg-green-500 rounded-full cursor-pointer fixed bottom-12 right-2'>
        <a href="#"><i class="fa-solid fa-arrow-up fa-xl"></i></a>
        </div>
    </div>
    </>
  )
}

export default Footer
