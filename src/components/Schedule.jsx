import ScheduleImg from '../assets/stats.webp'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Schedule = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 py-2 sm:py-4 md:py-8 lg:py-16'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12 '>
                <motion.img
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    src={ScheduleImg} alt="Stats image" />
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col gap-4 justify-start items-start'>
                    <p className='uppercase text-amber-600'>Schedule</p>
                    <h2 className='text-blue-500 font-bold text-2xl capitalize'>Some catchy title for scheduling</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ab consequatur officiis animi iure aspernatur quidem eius laboriosam deserunt, odit incidunt doloremque soluta temporibus nemo ipsam harum? Soluta, dolore eum.</p>
                    <a href='#' className='flex justify-center items-center gap-2'>
                        <p className='uppercase text-amber-600 font-semibold'>Schedule btn</p>
                        <TbArrowBigRightLinesFilled className='text-amber-600' />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Schedule