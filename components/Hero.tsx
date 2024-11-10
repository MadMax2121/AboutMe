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
          priority src="/images/italy_pic.jpg" fill={true} alt=""
        />
      </div>

      <div className='z-20'>
        <h2 className="text-sm uppercase xs:text-xs dark:text-black text-custom-gray pb-2 xs:tracking-[10px] tracking-[15px] font-bold">
          Software engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl md:text-base xs:text-xl font-semibold px-10'>
          <span className='dark:text-black mr-1'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <a href="#about">
            <button className=' xs:px-3 xs:py-2 pyduration-200 dark:text-black dark:hover:border-black dark:hover:bg-[rgb(36, 36, 36)] text-custom-gray  px-6 py-2 border border-[#242424] rounded-full uppercase text-xs font-semibold 
        md:tracking-widest xs:tracking-normal transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 dark:border-[rgb(250,249,246)] '>About</button>
          </a>
          <a href="#experience" >
            <button className=' xs:px-3 xs:py-2 duration-200 dark:text-black dark:hover:border-black dark:hover:bg-[rgb(36, 36, 36)] text-custom-gray  px-6 py-2 border border-[#242424] rounded-full uppercase text-xs font-semibold 
        md:tracking-widest xs:tracking-normal transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 dark:border-[rgb(250,249,246)] '>Experience</button>
          </a>
          <a href="#skills">
            <button className=' xs:px-3 xs:py-2 duration-200 dark:text-black dark:hover:border-black dark:hover:bg-[rgb(36, 36, 36)] text-custom-gray  px-6 py-2 border border-[#242424] rounded-full uppercase text-xs font-semibold 
        md:tracking-widest xs:tracking-normal transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 dark:border-[rgb(250,249,246)] '>Skills</button>
          </a>
          <a href="#projects" >
            <button className=' xs:px-3 xs:py-2 duration-200 dark:text-black dark:hover:border-black dark:hover:bg-[rgb(36, 36, 36)] text-custom-gray  px-6 py-2 border border-[#242424] rounded-full uppercase text-xs font-semibold 
        md:tracking-widest xs:tracking-normal transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 dark:border-[rgb(250,249,246)] '>Projects</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero