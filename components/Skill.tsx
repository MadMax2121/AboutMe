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
          x: directionLeft ? -100 : 100,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className=' dark:bg-[rgb(36,36,36)] relative h-20 w-20 rounded-full border border-gray-500 object-cover xs:w-12 xs:h-12 md:w-24 md:h-24 xl:w-28 xl:h-28
        filter group-hover:grayscale transition duration-300 ease-in-out flex items-center justify-center'>
          <Image className=' absolute h-20 w-20 inset-0 rounded-full' priority src={image} alt="" layout="fill" />

          <div className='absolute inset-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
        h-19 w-19 xs:w-12 xs:h-12 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0 flex items-center justify-center'>
            <p className='lg:text-3xl xl:text-3xl xs:text-sm ml-1 font-bold text-black opacity-100'>{percent}</p>
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default Skill