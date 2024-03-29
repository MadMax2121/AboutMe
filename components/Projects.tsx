import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
type Props = {}


function Projects({ }: Props) {

    const projects = [
        {
            title: "Job Finder",
            description: "This project is an implementation of a superchat, where users can register their account on the platform and communitcate with each other in real time. I used React, Javascript, and CSS to design the front end, and Redux to implement the user authentication end. I also used Firebase to deploy the website. ",
            image_url: "https://i.postimg.cc/qB8yF0Bw/JOB-FINDER-free-file.png",
            image_width: 250,
            image_height: 243,
            project_url: "https://jobfinder-e8577.web.app/"
        },
        {
            title: "Personal Portfolio",
            description: "This is the website! This encompasses my overall skills in web development, as well as just an overview into my professional life. I used Next JS and Tailwind to design this website. I also used multiple libraries like Framer Motion and Email JS to implement the email section.",
            image_url: "https://i.postimg.cc/VLS5JrDD/new.png",
            image_width: 327,
            image_height: 175,
            project_url: "#hero"
        },
        {
            title: "Face Recognition Software",
            description: "This Machine Learning project is a face recognition tool that compares the faces in the webcam of the device to the given list of \"known\" people, and prints out the confidence value of that match. I used OpenCV and Python in order to implement this tool. ",
            image_url: "/images/face.jpeg",
            image_width: 200,
            image_height: 200,
            project_url: "https://github.com/MadMax2121/face_recognition"
        }
    ]
    {/*
    const link = (value) => ({
        if (value) {
            <a href="jobfinder-e8577.web.app/" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">roadmap</a>
        }
        return
    })
    */}
    return (
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-custom-gray text-2xl'>
                Projects
            </h3>
            <div className=' scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
z-20'> {/* z-20 to come in front of the layering*/}


                {projects.map((project, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
items-center justify-center p-10 md:p-24 h-screen'>
                         <motion.div
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}>

                                <motion.a href={project.project_url} target={project.project_url == "#hero" ? "" : "_blank"}>
                                    <Image priority className="rounded-md" src={project.image_url} width={project.image_width}
                                        height={project.image_height} alt=""/>
                                </motion.a>
                            
                        </motion.div> 


                        <div className='space-y-5 lg:space-y-3 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Project {i + 1} of {projects.length}:
                                </span>{' '}
                                {project.title}
                            </h4>


                            <p className='text-md md:text-lg lg:text-xl text-center'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className='w-full absolute top-[28%] bg-[#F7AB0A]/10 dark:bg-[rgb(36,36,36)] left-0 h-[550px]
-skew-y-12 '>
            </div>
        </motion.div>
    )
}


export default Projects
