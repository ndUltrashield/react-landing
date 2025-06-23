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
        <section className='w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-16 flex flex-col sm:flex-row md:flex-row lg:flex-row'>
            <div className='max-w-6xl mx-auto flex flex-col gap-1'>
                <p className='uppercase text-sm text-amber-600'>Achieve more</p>
                <div className='font-extrabold text-3xl w-48'>
                    Purpose of this to learn and practice.
                </div>
            </div>
            <div>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex flex-col sm:flex-row md:flex-row lg:flex-row mx-auto h-fit'>
                            <div>
                                {feature.icon}
                            </div>
                            <div>
                                {feature.title}
                                {feature.description}
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Purpose