import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  directionLeft?: boolean,
  image: string
  percent: string
}

function Skill({ directionLeft, image, percent }: Props) {

  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className='relative h-20 w-20 rounded-full border border-gray-500 object-cover md:w-24 md:h-24 xl:w-28 xl:h-28
          filter group-hover:grayscale transition duration-300 ease-in-out'>
          <Image className='rounded-full' priority src={image} alt="" layout="fill" />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
            h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black opacity-100'>{percent}</p>
            </div>
          </div>
        </div>



      </motion.div>

    </div>
  )
}

export default Skill