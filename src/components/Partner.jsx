import React from 'react'

const Partner = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-4 py-8'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='font-bold text-2xl text-amber-600'>How can we help?</h3>
                <p>Idiot! Write something to show you can actually help</p>
            </div>
            <div></div>
            <button className='flex bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100'>
                Become a Partner
            </button>
        </section>
    )
}

export default Partner