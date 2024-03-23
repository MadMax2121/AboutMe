import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect } from 'react';
import { useState } from 'react';
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";


type Props = {}


export default function Header({ }: Props) {

  return (
    <header className='sticky top-0 p-5 flex items-center max-w-7xl mx-auto z-20
xl:items-center '> {/* has a max width constraint, and mx=auto automatically applies left and right margins on left and right axis*/}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5,
        }}
        className='flex flex-row items-center'>


        {/* Social Icons*/}
        <SocialIcon url="https://github.com/MadMax2121"
          fgColor="gray"
          bgColor='transparent'
          target="_blank"
        />

      <SocialIcon url="https://www.linkedin.com/in/moskalenko21/"
          fgColor="gray"
          bgColor='transparent'
          target="_blank"
        />

      </motion.div>

      <motion.div

        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
        className='ml-auto flex flex-row items-center text-gray-900
      cursor-pointer'>
       <div><ThemeSwitcher /></div>
      </motion.div>
      <motion.a href="#contact"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
        className='ml-4 flex flex-row items-center text-gray-900
          cursor-pointer'>

        <EmailIcon className="mr-1 text-custom-gray" />
        <p className='uppercase md:inline-flex text-sm text-custom-gray'>Get in Touch
        </p>


        {/* Hidden on mobile, when on a medium screen show on flex*/}

      </motion.a>



    </header>
  );
}
