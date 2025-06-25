import React from 'react'
import { BiSolidBulb, BiSolidLayer, BiSolidCoffee, BiSolidCog } from "react-icons/bi";

const OurFeature = () => {

    const ourfeatures = [
        {
            icon: <BiSolidLayer className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidCog className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidCoffee className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more"
        }
    ]

    const listitem = [
        {
            desc: "▪️Lorem ipsum dolor sit amet consectetur."
        },
        {
            desc: "▪️Deleniti asperiores commodi doloribus."
        },
        {
            desc: "▪️Repellendus nobis earum voluptate quis."
        },
    ]

    return (
        <section>
            <div className='max-w-7xl mx-auto py-6 sm:py-8 md:py-12'>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-bold text-2xl'>Write a short title here.</h3>
                        <p className='text-lg'>A short description here.</p>
                        <div className='flex flex-col gap-2'>
                            {
                                listitem.map((li, index) => (
                                    <p key={index} className='text-sm'>{li.desc}</p>
                                ))
                            }
                        </div>
                        <button className='flex bg-blue-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-amber-500 transition-all hover:shadow-lg hover:shadow-amber-100 cursor-pointer w-fit'>
                            Get Started
                        </button>
                    </div>
                    <div>
                        <div>
                            {
                                ourfeatures.map((feat, index) => (
                                    <div>
                                        {feat.icon}
                                        {feat.title}
                                        {feat.description}
                                        {feat.link}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFeature