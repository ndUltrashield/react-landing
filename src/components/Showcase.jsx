import React from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import woocommerce from "../assets/woocommerce.png"

const Showcase = () => {

    const logos = [slack, amazon, meundies, sitepoint, woocommerce]
    return (
        <div className='w-full overflow-hidden mx-auto container py-20 px-4 lg:px-0 sm:px-0 gap-4 lg:gap-0 sm:gap-0 flex flex-col sm:flex-row items-start sm:items-center'>
            <div className='w-[300px] shrink-0 text-gray-600 border-l-4 border-amber-600 px-6 py-2 bg-white z-10 sm:text-base text-xl font-semibold text-left'>
                Showcased Logos <br /> are here.
            </div>
            <div className='flex whitespace-nowrap animate-slide cursor-pointer'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="logos" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}

                {/* duplicate logos */}
                {logos.map((logo, index) => (
                    <img key={`duplicate - ${index}`} src={logo} alt="logos" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}
            </div>
        </div>
    )
}

export default Showcase