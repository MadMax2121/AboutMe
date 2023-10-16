import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';




type Props = {}

export default function Header({}: Props) {
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
        <SocialIcon url="https://twitter.com" 
        fgColor="gray"
        bgColor='transparent'
        target="_blank"    
        />

        <SocialIcon url="https://twitter.com" 
        fgColor="gray"
        bgColor='transparent'
        target="_blank" 
        />

        <SocialIcon url="https://twitter.com" 
          fgColor="gray"
          bgColor='transparent'
          target="_blank" 
        />
    </motion.div>

      <Link href="#contact" legacyBehavior>
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
        className='flex flex-row items-center text-gray-300 
        cursor-pointer'>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor='gray'
            bgColor='transparent'
          />
          
          <p className='uppercase md:inline-flex text-sm text-gray-400'>Get in Touch 
          </p>
          
         {/* Hidden on mobile, when on a medium screen show on flex*/}
  
      </motion.div>
      </Link>

    </header>
  );
}