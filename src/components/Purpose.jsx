import React from 'react'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const Purpose = () => {

    //   purpose section
    const features = [
        {
            icon: "🟣", // Replace with your actual icon component or image
            title: "Built for impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            icon: "🔴", // Replace with your actual icon component or image
            title: "In sync with you",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
    ];

    return (
        <section className='w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-16 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 items-center'>
            <div className='max-w-6xl mx-0 sm:mx-auto md:mx-auto lg:mx-auto flex flex-col gap-1 justify-start'>
                <p className='uppercase text-sm text-amber-600'>Achieve more</p>
                <div className='font-extrabold text-4xl w-64'>
                    Purpose of this to learn and practice.
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mx-0 sm:mx-auto md:mx-auto lg:mx-auto'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex flex-col gap-2 sm:flex-row md:flex-row w-full lg:flex-row h-fit sm:w-100 justify-start'>
                            <div className='h-fit w-fit justify-start items-center flex rounded-lg'>
                                {feature.icon}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-semibold'>{feature.title}</h3>
                                <p className='text-gray-400'>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Purpose