{/*trfce for instant start*/}
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from "next/link";

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, My name is Max Moskalenko",
         "This is my website", "Enjoy!"
        ,"You're still here?"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        
        <div className='relative h-36 w-36'>
        <Image className = "relative rounded-full mx-auto object-cover"
        priority src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" alt="" layout="fill"
        />
        </div>

        <div className='z-20'>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-bold">
            Software engineer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
          </h1>
      
          <div className='pt-5'>
            <Link href="#about" scroll={false}>
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience" scroll={false}>
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills" scroll={false}>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects" scroll={false}>
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
        </div>
        
    </div>
  )
}

export default Hero