import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm font-semibold'>
        Hover over a skill for current profeciency
      </h3>

      <div className='grid grid-cols-3 gap-5'>
        <Skill directionLeft={true} image={"/images/python.svg"} percent={"70%"} />
        <Skill directionLeft={true} image={"/images/java.svg"} percent={"80%"} />
        <Skill directionLeft={false} image={"/images/c-plusplus.svg"} percent={"75%"} />
        <Skill directionLeft={true} image={"/images/javascript.svg"} percent={"70%"} />
        <Skill directionLeft={false} image={"/images/nextjs-icon.svg"} percent={"75%"} />
        <Skill directionLeft={false} image={"/images/tailwindcss-icon.svg"} percent={"80%"} />
        <Skill directionLeft={true} image={"/images/react.svg"} percent={"90%"} />
        <Skill directionLeft={true} image={"/images/github-mark-white.svg"} percent={"100%"} />
        <Skill directionLeft={false} image={"/images/firebase.svg"} percent={"90%"} />

      </div>
    </motion.div>
  )
}

export default Skills