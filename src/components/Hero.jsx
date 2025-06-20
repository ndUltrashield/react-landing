import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import Heroimg from "../assets/hero-image.png";

const Hero = () => {
    return (
        <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-40 pb-6 px-4 sm:px-6 lg:px-8'>
            {/* left side */}
            <div className='w-full md:w-1/2 space-y-8'>
                <div className='flex items-center gap-2 bg-amber-100 w-fit px-5 py-2 rounded-full group hover:bg-blue-100 cursor-pointer'>
                    <BiSolidStar className='text-amber-600 group-hover:scale-110 transition-transform group-hover:text-blue-500' />
                    <span className='font-normal text-sm'> Write a tagline here.</span>
                </div>
            </div>

            {/* right side */}
            <div className='w-full md:w-1/2'>
                <img src={Heroimg} alt="hero-img" className='hover:scale-101 transition-transform' /></div>
        </section>
    )
}

export default Hero