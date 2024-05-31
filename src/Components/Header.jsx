import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = () => [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Menu', path: 'menu' },
        { link: 'Gallery', path: 'gallery' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <nav className=''>
            <div id='Logo' className='flex flex-row justify-center items-center'>
                <img src={Logo} height={60} width={60} alt='DFoodApp Logo' />
                <h1 className='text-orange-500 lg:text-4xl text-2xl font-bold'>DFoodApp</h1>
            </div>
            <ul className='lg:flex justify-center items-center gap-10 hidden'>
                {navItems().map(({ link, path }) => (
                    <li key={path}>
                        <Link
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black'
                            onClick={closeMenu}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <div className='flex justify-center items-center lg:hidden z-50' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <i className="fas fa-times fa-xl" style={{ color: '#ffffff' }}></i>
                ) : (
                    <i className="fas fa-bars fa-xl" style={{ color: '#ffffff' }}></i>
                )}
            </div>
            {isMenuOpen && (
                <div className='flex w-full h-fit bg-slate-800 p-4 absolute -top-20 left-0' onClick={closeMenu}>
                    <ul className='flex flex-col justify-center items-center gap-2 w-full mt-20'>
                        {navItems().map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} spy={true} offset={-100} smooth={true} className='text-white font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black w-full text-center'>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Header;
