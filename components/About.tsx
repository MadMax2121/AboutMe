import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}


function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen
text-center md:text-left md:flex-row max-w-7xl px-10 justify-center space-y-5 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-custom-gray dark:text-black text-2xl'>
                About
            </h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='relative w-[190px] h-[210px] mt-20 md:mb-0 object-cover flex-shrink-0
md:rounded-lg md:w-[250px] md:h-[333px] xl:w-[300px] xl:h-[400px]'>=
                <Image className='rounded-full md:rounded-sm' priority src="/images/profile_pic.jpg" alt="" layout='fill' />
            </motion.div>
            <div className='space-y-3 md:space-y-10 px-0 md:px-10'>
                <h4 className='dark:text-black text-4xl lg:text-3xl md:text-2xl xs:text-lg font-semibold'>
                    Here is a{" "}
                    <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background
                </h4>
                <p className=" dark:text-black xl:text-lg lg:text-lg md:text-sm xs:text-xs">
                    Hey there! My name is Max, and I am a Junior at UMASS Boston, and I am majoring
                    in Computer Science. I love playing video games, hanging out with friends, and coding in my spare time.
                    This webiste is one of my most beloved projects, because it shows my knowledge of Typescript and Tailwind.
                    Please do not hesitate to contact me by scrolling to the botoom or pressing the &quot;GET IN TOUCH&quot; button in the
                    top right corner of the screen.
                </p>
            </div>
        </motion.div>
    )
}

export default About


