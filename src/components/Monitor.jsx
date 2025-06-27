import MonitorImg from '../assets/monitor-card.webp'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Monitor = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 py-8 sm:py-4 md:py-8 lg:py-16'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-12 '>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col gap-4 justify-start items-start'>
                    <p className='uppercase text-blue-600'>Monitor</p>
                    <h2 className='text-amber-500 font-bold text-2xl capitalize'>Some catchy title for monitoring</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ab consequatur officiis animi iure aspernatur quidem eius laboriosam deserunt, odit incidunt doloremque soluta temporibus nemo ipsam harum? Soluta, dolore eum.</p>
                    <a href='#' className='flex justify-center items-center gap-2'>
                        <p className='uppercase text-blue-600 font-semibold'>Learn more about monitoring</p>
                        <TbArrowBigRightLinesFilled className='text-blue-600' />
                    </a>
                </motion.div>
                <motion.img
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    src={MonitorImg} alt="Monitor image" />
            </div>
        </section>
    )
}

export default Monitor