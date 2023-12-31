import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';


type Props = {}


export default function Header({ }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
xl:items-center'> {/* has a max width constraint, and mx=auto automatically applies left and right margins on left and right axis*/}
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


        <SocialIcon url="https://www.instagram.com/madmax_2121/"
          fgColor="gray"
          bgColor='transparent'
          target="_blank"
        />


        <SocialIcon url="https://www.youtube.com/channel/UC3EVt0qrYhW3WAtpN2cwTEw"
          fgColor="gray"
          bgColor='transparent'
          target="_blank"
        />
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
          className='flex flex-row items-center text-gray-300
cursor-pointer'>
          
          <EmailIcon className = "mr-1 text-gray-400"/>
          <p className='uppercase md:inline-flex text-sm text-gray-400'>Get in Touch
          </p>


          {/* Hidden on mobile, when on a medium screen show on flex*/}

      </motion.a>


    </header>
  );
}
