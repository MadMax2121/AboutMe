import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'


type Props = {}


function WorkExperience({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full
            px-10 justify-evenly mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-custom-gray text-2xl'>
                Experience
            </h3>


            <div className='h-[550px] scrollbar scroll-smooth scrollbar-track-gray-400/20
          scrollbar-thumb-[#F7AB0A]/80 w-full flex space-x-5 overflow-x-scroll
            pt-24 snap-x snap-mandatory'>
                <ExpCard />
            </div>

        </motion.div>
    )
}


export default WorkExperience