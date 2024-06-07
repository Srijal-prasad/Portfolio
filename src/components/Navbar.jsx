import React from 'react'
import logo from '../assets/MyLogo.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-24 md:w-40 h-auto' src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/srijal-prasad-3aa181184/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="https://github.com/Srijal-prasad" target="_blank" rel="noopener noreferrer">
          <FaGithub className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="https://x.com/PrasadSrijal" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href="https://www.instagram.com/srijal_prasad/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='w-6 h-6 md:w-8 md:h-8' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
