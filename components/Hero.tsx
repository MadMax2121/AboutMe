{/*trfce for instant start*/ }
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import React from 'react'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from "next/link";

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My name is Max Moskalenko",
      "This is my website", "Enjoy!"
      , "You're still here?"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <div className='relative h-36 w-36'>
        <Image className="rounded-full mx-auto object-cover"
          priority src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" alt="" layout="fill"
        />
      </div>

      <div className='z-20'>
        <h2 className="text-sm uppercase dark:text-black text-custom-gray pb-2 tracking-[15px] font-bold">
          Software engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='dark:text-black mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className=' pt-5'>
          <a href="#about">
            <button className='dark:text-black dark:hover:border-black dark:hover:bg-[rgb(36, 36, 36)] text-custom-gray dark:heroButton dark:border-[rgb(250,249,246)] heroButton'>About</button>
          </a>
          <a href="#experience" >
            <button className='dark:text-black text-custom-gray dark:heroButton dark:border-[rgb(250,249,246)] heroButton'>Experience</button>
          </a>
          <a href="#skills">
            <button className=' dark:text-black text-custom-gray dark:heroButton dark:border-[rgb(250,249,246)] heroButton'>Skills</button>
          </a>
          <a href="#projects" >
            <button className='dark:text-black text-custom-gray dark:heroButton dark:border-[rgb(250,249,246)] heroButton'>Projects</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero