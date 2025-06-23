import React from 'react'

const Partner = () => {

    //   features section

    const features = [
        {
            icon: "🔍",
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models"
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing"
        }
    ]

    return (
        <section className='flex flex-col items-center justify-center gap-8 py-16 px-4 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-bold text-3xl text-amber-600'>How can we help?</h3>
                <p className='text-center'>Idiot! Write something to show you can actually help</p>
            </div>
            <div className='flex flex-col justify-evenly items-center lg:flex-row gap-4'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex flex-col gap-2 items-center justify-center w-full sm:w-80'>
                            <div className='text-xl text-center rounded-full px-3 py-3' style={{ backgroundColor: index === 0 ? "#f1eff0" : index === 1 ? "#fee7e7" : "#fff3e4" }}>{feature.icon}</div>
                            <h3 className='text-center font-bold text-xl'>{feature.title}</h3>
                            <p className='text-center'>{feature.description}</p>
                        </div>
                    ))
                }
            </div>
            <button className='flex bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer'>
                Become a Partner
            </button>
        </section>
    )
}

export default Partner