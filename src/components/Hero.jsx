import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {FaCheck} from "react-icons/fa";
import pvc from '../assets/pvc.jpg'
import Abubakar from '../assets/Abubakar.webp'
import peter from '../assets/peter-obi.jpg'
import Tinubu from '../assets/Tinubu.jpg'
import Atiku from '../assets/Atiku.jpg'
import { Link, animateScroll as scroll, } from 'react-scroll'

// import bgImg from '../assets/cyber.png'

const Hero = () => {

    const handleClick = (event, param) => {
        console.log(event);
        console.log(param);
      };
    return (
       <div name="home" className="h-full w-full bg-indigo-50 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen md:flex-row pt-10">
            <div className="flex flex-col justify-center h-full ">
                <h2 className="text-4xl sm:text-5xl font-bold  font-poppins text-#171740">Lorem ipsum dolor sit amet.</h2>
                <p className="text-gray-500  py-2 justify-center font-Asap items-center max-w-md text-#242464 font-semibold"> Praesent placerat ipsum nec mi maximus,
                 vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada. </p>

                     <div className="flex mt-10 ">
                        <Link to="portfolio" smooth duration={500} className="text-white group w-fit px-6 py-3 my-2 flex items-center
                    rounded-md bg-gradient-to-r from-blue-500 to-blue-500 cursor-pointer" 
                    >
                        
                            Primary action
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={35} className="ml-1"/>
                            </span>
                            
                        </Link>
                        <p className="p-5 m-auto ml-3    font-bold text-indigo-900">Secondary action</p>
                     </div>
            </div>


        <div className="md:mt-5">
            <img src={pvc} alt="" className="rounded-2xl mx-auto  md:full bg-white"/> 
        </div>

        </div>


{/* --------------------VOTER EDUCATION----------------------------- */}



<div className='h-full w-full bg-indigo-50'>
    <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center md:flex-row ">
                

            <div className=' p-1 h-full'>
                
                <h2 className="text-[40px] font-poppins font-semibold items-center ml-3">Voter Education</h2>
                <div className='grid md:grid-cols-3'>

                   {/* col for standard start */}
                   <div className='bg-indigo-100 border-2 border-green-500 text-slate-900 m-4 p-8 md:h-[350px] rounded-xl item-center  justify-centers '> 
                        <span className=' px-3 py-1  text-2xl font-bold items-center justify-center font-poppins'>INEC Electoral Acts</span>
                        <div>
                            <p className="text-4xl font-bold py-4 font-poppins flex">$0<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        
                        <div className="">
                            <p className="flex py-1 "><FaCheck className="w-4 mr-5 font-Asap" />Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            
                            <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins m-2">View Manifesto</button>
                        </div>
                    </div>
                    {/* col for standard end */}

                    {/* col for standard start */}
                    <div className='bg-indigo-100 border-2 border-green-500 text-slate-900 m-4 p-8 md:h-[350px] rounded-xl item-center  justify-centers '> 
                        <span className=' px-3 py-1  text-2xl font-bold items-center justify-center font-poppins'>INEC Electoral Acts</span>
                        <div>
                            <p className="text-4xl font-bold py-4 font-poppins flex">$0<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        
                        <div className="">
                            <p className="flex py-1 "><FaCheck className="w-4 mr-5 font-Asap" />Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            
                            <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins m-2">View Manifesto</button>
                        </div>
                    </div>
                    {/* col for standard end */}


                    {/* col for standard start */}
                    <div className='bg-indigo-100 border-2 border-green-500 text-slate-900 m-4 p-8 md:h-[350px] rounded-xl item-center  justify-centers '> 
                        <span className='px-3 py-1  text-2xl font-bold items-center justify-center font-poppins'>INEC Electoral Acts</span>
                        <div>
                            <p className="text-4xl font-bold py-4 font-poppins flex">$0<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        
                        <div className="p-1">
                            <p className="flex py-1 "><FaCheck className="w-4 mr-5  font-Asap" />Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            <p className="flex py-1"><FaCheck className="w-4 mr-5 "/>Lorem, ipsum dolor.</p>
                            
                            <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins m-2">View Manifesto</button>
                        </div>
                    </div>
                    {/* col for standard end */}

                   

                </div>

                </div>
            </div>
        </div>



{/* --------------ASPIRANT----------------- */}


<div className='h-full w-full bg-indigo-50'>
    <div className="max-w-[1140px] mx-auto  flex flex-col h-screen md:flex-row py-12">
    <div className="p-8 h-full">
    <h2 className="text-[40px] font-poppins font-semibold items-center ml-3">Aspirants</h2>
    <div className='grid md:grid-cols-3'>

                   {/* col for standard start */}
                   <div className='   text-slate-900 m-4  md:h-[350px] rounded-xl item-center  justify-centers '> 
                   <img src={peter} alt="" className="rounded-1xl   md:full bg-white"/> 
                   <h3 className="font-inter text-[24px] font-normal">Peter Obi</h3>
                   <p className="text-[18px] font-Asap">Labour Party (LP)</p>
                   <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins mt-3">View Manifesto</button>
                    </div>
                    
                    {/* col for standard end */}

                    {/* col for standard start */}
                   <div className='   text-slate-900 m-4  md:h-[350px] rounded-xl item-center  justify-centers '> 
                   <img src={Abubakar} alt="" className="rounded-1xl   md:full bg-white"/> 
                   <h3 className="font-inter text-[24px] font-normal">Bola Ahmed Tinubu</h3>
                   <p className="text-[18px] font-Asap">All Progressive Party (APC)</p>
                   <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins mt-3">View Manifesto</button>
                    </div>
                    
                    {/* col for standard end */}

                    {/* col for standard start */}
                   <div className='   text-slate-900 m-4  md:h-[350px] rounded-xl item-center  justify-centers '> 
                   <img src={Tinubu} alt="" className="rounded-1xl   md:full bg-white"/> 
                   <h3 className="font-inter text-[24px] font-normal">Atiku Abubakar</h3>
                   <p className="text-[18px] font-Asap">People's Democratic Party (PDP)</p>
                   <button className="w-full py-4 bg-green-600 border-none hover:text-green-600 font-poppins mt-3">View Manifesto</button>
                    </div>
                    
                    {/* col for standard end */}
     </div>

                </div>
    </div>
</div>


{/* ---------------------TESTIMONY----------------------------- */}
<div className='h-full w-full bg-indigo-50'>
<div className="max-w-[1140px] mx-auto  flex flex-col h-screen md:flex-row py-12">
        <div className="p-2 h-full">
           
            <h1 className="font-inter text-[53px] justify-center font-semibold text-center">"If we don't vote, we are ignoring history and giving away the future."</h1>

            <img src={peter} alt="" className="w-40 rounded-3xl mx-auto mt-9"  />
            <div></div>
            <p className="font-inter text-[20px] font-semibold  text-center">Jennifer Rowland</p>
            <p className="font-inter text-center">Chief design Officer, Uxtoast</p>
        </div>
    </div>
</div>



{/* -----------------Another section----------------------- */}

<div className="h-full w-full bg-indigo-50">
<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row mt-[-60px]">
            <div className="flex flex-col justify-center h-full mr-8">
                <h2 className="text-4xl sm:text-4xl font-bold  font-poppins text-#171740">Lorem ipsum dolor sit amet.</h2>
                <p className="text-gray-500  py-2 justify-center font-Asap items-center max-w-md text-#242464 font-semibold"> Praesent placerat ipsum nec mi maximus,
                 vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada. </p>
            </div>


        <div className="md:mt-5">
            <img src={pvc} alt="" className="rounded-2xl mx-auto mr-2  md:full bg-white"/> 
        </div>

        </div>
</div>



{/* -----------------Another section----------------------- */}

<div className="h-full w-full bg-indigo-50">
<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row mt-[60px]">

            <div className="md:mt-5">
                        <img src={pvc} alt="" className="rounded-2xl mx-auto mr-2  md:full bg-white"/> 
                    </div>
           
            <div className="flex flex-col justify-center h-full ml-8">
                <h2 className="text-4xl sm:text-4xl font-bold  font-poppins text-#171740">Lorem ipsum dolor sit amet.</h2>
                <p className="text-gray-500  py-2 justify-center font-Asap items-center max-w-md text-#242464 font-semibold"> Praesent placerat ipsum nec mi maximus,
                 vel cursus mauris cursus. Vivamus cursus ante eget orci egestas malesuada. </p>
            </div>

        

        </div>
</div>





{/* ------------------Next section============== */}

<div className='h-full w-full bg-indigo-50'>
    <div className="max-w-[1140px] mx-auto  flex flex-col  md:flex-row py-12">
    <div className="p-12">
   
    <div className='grid md:grid-cols-4'>

                   {/* col for standard start */}
                   <div className='   text-slate-900 m-4  md:h-[100px] rounded-xl item-center  justify-centers '> 
                   
                   <h3 className="font-inter text-[24px] text-center font-semibold">Lorem, ipsum.</h3>
                   <p className="text-[18px] text-center font-Asap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Veniam aut culpa nisi debitis necessitatibus vero autem!</p>
                   
                    </div>
                    
                    {/* col for standard end */}


         {/* col for standard start */}
         <div className='   text-slate-900 m-4  md:h-[100px] rounded-xl item-center  justify-centers '> 
                   
                   <h3 className="font-inter text-[24px] text-center font-semibold">Lorem, ipsum.</h3>
                   <p className="text-[18px] text-center font-Asap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Veniam aut culpa nisi debitis necessitatibus vero autem!</p>
                   
                    </div>
                    
                    {/* col for standard end */}

 {/* col for standard start */}
 <div className='   text-slate-900 m-4  md:h-[100px] rounded-xl item-center  justify-centers '> 
                   
                   <h3 className="font-inter text-[24px] text-center font-semibold">Lorem, ipsum.</h3>
                   <p className="text-[18px] text-center font-Asap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Veniam aut culpa nisi debitis necessitatibus vero autem!</p>
                   
                    </div>
                    
                    {/* col for standard end */}


 {/* col for standard start */}
 <div className='   text-slate-900 m-4  md:h-[100px] rounded-xl item-center  justify-centers '> 
                   
                   <h3 className="font-inter text-[24px] text-center font-semibold">Lorem, ipsum.</h3>
                   <p className="text-[18px] text-center font-Asap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Veniam aut culpa nisi debitis necessitatibus vero autem!</p>
                   
                    </div>
                    
                    {/* col for standard end */}


                     
                    

     </div>

    </div>
    </div>
</div>


{/* ======================Contact us========================= */}


<div className='h-full w-full bg-indigo-50'>
    <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center md:flex-row ">
         
            <div className='p-12 '>
                
                

                   {/* col for standard start */}
                   <div className='bg-indigo-100 border-2 border-green-500 text-slate-900 m-4 p-8 md:h-[350px] rounded-xl item-center  justify-centers '> 
                       <form>
                       <input type="text" name='name'
                     placeholder='Enter your name'
                    className=' p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none' />

                    <input type="text" name='name'
                     placeholder='Enter your name'
                    className=' p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none' />
                        
                        
                        </form> 
                        
                        
                    </div>
                    {/* col for standard end */}

                    



                   

               

                </div>
            </div>
        </div>






       </div>  
    )  
}
export default Hero;