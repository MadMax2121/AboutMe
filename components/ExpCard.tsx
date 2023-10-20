import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExpCard({}: Props) {
  return (
    <article className="flex overflow-scroll flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[400px] h-[400px]  md:w-[600px] xl:w-[700px] snap-center ring-offset-2 bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 ">
        <motion.div 
          initial={{
            y: -100,
            opacity: 1
          }}
          transition={{ duration: 1.2}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true}}
          className= "relative w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center">
        
            <Image className = "rounded-full" priority src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" 
             alt="" layout="fill"/>
          </motion.div>

          <div className='px-0 md:px-10'>
            <h4 className='text-xl font-light'>CEO oF MAKS</h4>
            <p className='font-bold text-xl mt-1'>lol</p>
            <div className='flex space-x-2 my-2 '>
        
                    <Image className='rounded-full' priority height={50} width= {50} src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" alt=""/>
                    <Image className='rounded-full' priority height={50} width= {50} src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" alt=""/>
                    <Image className='rounded-full' priority height={50} width= {50} src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" alt=""/>
               
            
            </div>
            <p>Started work... -Ended...</p>

            <ul className='list-disc space-y-2 ml-5 text-lg h-20'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
          </div>
        </article>  
  )
}

export default ExpCard