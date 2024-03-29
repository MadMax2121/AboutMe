import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%",]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center">
      <div className='absolute border dark:border-[rgb(208,206,205)] border-[#333333] rounded-full h-[200px] w-[200px] 
      mt-52 animate-ping'/> {/*margin top - 52 */}
      <div className='border dark:border-[rgb(208,206,205)] border-[#333333] rounded-full h-[300px] w-[300px] absolute
      mt-52'/>
      <div className='border dark:border-[rgb(208,206,205)] border-[#333333] rounded-full h-[500px] w-[500px] absolute
      mt-52'/>
      <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px]
      absolute mt-52 animate-pulse'/>
      <div className='dark:border-[rgb(208,206,205)] rounded-full border border-[#333333]  h-[800px] w-[800px]
      absolute mt-52 '/>
    </motion.div>
  );
}

export default BackgroundCircles