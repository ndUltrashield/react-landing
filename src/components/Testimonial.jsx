import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { BiLeftArrowAlt, BiRightArrowAlt, BiSolidStar } from "react-icons/bi";

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

//   testimonials section
const testimonials = [
    {
        id: 1,
        name: "Robin Ayala Doe",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
        id: 2,
        name: "John De marli",
        image: "https://randomuser.me/api/portraits/women/90.jpg",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
        id: 3,
        name: "Rowhan Smith",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
        id: 5,
        name: "Michael Chen",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
        id: 6,
        name: "Emma Wilson",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },

];


const Testimonial = () => {

    return (
        <section id='testimonials' className='py-16 px-4 max-w-6xl mx-auto flex flex-col gap-8'>
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-2xl uppercase text-center'>Why do we care what people say!</h2>
                <p className='text-md text-gray-500'>WTF are these people ranting on about?</p>
            </motion.div>

            <motion.div
                variants={fadeIn('top', 0.2)}
                initial="hidden"
                whileInView="show"

                className='relative'>
                <Swiper
                    navigation={
                        {
                            nextEl: '.swiper-btn-next-custom',
                            prevEl: '.swiper-btn-prev-custom',
                        }
                    }
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },

                    }}
                    modules={[Navigation]}
                    className="testimonial_swiper"
                >
                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center justify-center gap-4 p-4 h-full bg-white'>
                                    <div className='w-24 h-24 mx-auto'>
                                        <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>

                                    <div className='flex'>
                                        {
                                            [...Array(5)].map((_, starIndex) => (
                                                <span className='text-amber-500'><BiSolidStar /></span>
                                            ))
                                        }
                                    </div>

                                    <div className='text-lg font-bold text-blue-600'>{testimonial.name}</div>
                                    <div className='text-center text-gray-600'>{testimonial.text}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                {/* navigator */}

                <div className='flex justify-center gap-4 mt-8'>
                    <button className='swiper-btn-prev-custom w-12 h-12 rounded-full bg-amber-500 text-white sm:text-black sm:bg-white border-gray-200 flex items-center justify-center sm:hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer'>
                        <BiLeftArrowAlt className='size-6' />
                    </button>
                    <button className='swiper-btn-next-custom w-12 h-12 rounded-full bg-amber-500 text-white sm:text-black sm:bg-white border-gray-200 flex items-center justify-center sm:hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer'>
                        <BiRightArrowAlt className='size-6' />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Testimonial