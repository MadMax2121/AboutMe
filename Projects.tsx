import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
      justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className=' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 
        relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20'>  {/* z-20 to come in front of the layering*/}
            
            {projects.map((project, i) => (
                <div className='relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                     items-center justify-center p-20 md:p-24 h-screen'>
                    <motion.div 
                      initial={{
                      y:-300,
                      opacity: 0
                      }}
                      transition={{duration: 1.2}}
                      whileInView={{opacity:1, y: 0}}
                      viewport={{once:true}}>
                        <Image priority src="https://i.postimg.cc/J7YgHWFW/IMG-1296-1.png" width={300} height={600}
                        alt=""/>
                    </motion.div>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{' '}
                            UPS clone
                        </h4>

                        <p className='text-md text-center md:text-left'>
                            hgou;bheubgufweghpf9uwhfvnwueyp9byp9qYRBPYVWEP G
                            hgou;bheubgufweghpf9uwhfvnwueyp9byp9qYRBPYVWEP 
                            hgou;bheubgufweghpf9uwhfvnwueyp9byp9qYRBPYVWEP G
                            hgou;bheubgufweghpf9uwhfvnwueyp9byp9qYRBPYVWEP G
                            hgou;bheubgufweghpf9uwhfvnwueyp9byp9qYRBPYVWEP G
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
        -skew-y-12'>
        </div>
    </motion.div>
  )
}

export default Projects