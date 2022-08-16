import React, { useState } from 'react'
import {FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png'
import { Link, animateScroll as scroll, } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState (false);

  const links = [
    {
      id:1,
      link: 'home',
      url: 'home',
      
    },
    {
      id:2,
      link: 'aspirant',
      URL: 'about',
      
    },
    {
      id:3,
      link: 'parties',
    },
    {
      id:4,
      link: 'parties',
    },
    
  ]
  return(
    <div className='bg-indigo-100 flex  items-center w-full h-20 px-4 fixed z-10 text-white'>
      <div className='m-auto '>
       <img className="w-[120px] py-5 mt-3 mr-8 " src={logo} alt="/" /> 
       {/* <h1 className='text-5xl ml-2 text-indigo-50 font-signature'>Hollumide</h1>  */}
      </div>
      {/* desktop navbar */}

      <ul className='hidden md:flex'>

      {links.map(({id, link, }) => (
        <li key={id} 
        className=' mt-4 cursor-pointer capitalize font-medium
         text-gray-500  hover:scale-105 duration-200 font-Asap text-[18px]'>
          <Link to={link} smooth duration={500}>{link}</Link>
          
          </li>

      ))} 

      </ul>

      {/* mobile navbar */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-5 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>

        {nav && (
           <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
  
          {links.map(({id, link}) => (
          <li key={id} 
          className='px-4 cursor-pointer capitalize py-6 text-4xl '>
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
  
        ))} 
          </ul> 

        )}
        
       <div className='ml-[400px]'>
            <ul className='hidden md:flex  text-indigo-500 mt-4 mr-24'>
              <li className='px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200 font-Asap text-[18px]'>EN</li>
              <li className='px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200 font-Asap text-[18px]'>Log in</li>
            </ul>
       </div>

    </div>
  )
};
export default NavBar;