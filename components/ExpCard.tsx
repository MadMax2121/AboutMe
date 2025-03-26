import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}






function ExpCard({ }: Props) {


  const jobs = [
    
    {
      title: "Software Engineer",
      url: "/images/granite-logo.png",
      light_url: "/images/granite-logo.png",
      location: "Granite Telecommunications, Quincy, MA",
      date: "June 2024 - Current",
      li1: "Improved warehouse allocation efficiency by 80% by developing a Flask server with integrated API routes and a PostgreSQL database to automate repetitive, manual warehouse processes.",
      li2: "Containerized and deployed the Flask server with Docker and Kubernetes, optimizing resource utilization by 40% and load balancing in clusters to enhance performance and reliability.",
      li3: "Redesigned the whole interface for a centralized company webapp using Next.Js and Tailwind, set up API calls and routes to display a json configuration of a IoT device, as well as pushed updated data models to the DynamoDB database, optimizing data storage by 40%.",
      li4: "Eased the troubleshooting process for 1000+ customers by creating IoT Core events and updating AWS Lambda to display current statuses of embedded systems devices in a centralized webapp.",
      width: 300,
      height: 300
    },
    {
      title: "Software Engineering Internship",
      url: "/images/mission-space-dark.png",
      light_url: "/images/mission-space-light.png",
      location: "Mission Space, Boston, MA",
      date: "May 2023 - August 2023",
      li1: "Performed firmware updates and pushed code into a small satellite, which optimized flight performance by 20%.",
      li2: "Used Arduino IDE to program the sensors, accelerometers, and gyroscopes of a small satellite (1U CubeSat) that launched 10km into space.",
      li3: "•	Created a program using C++ to analyze and store the data from the satellite on an SD card, including data from a Geiger counter, which calculates nearby radiation in the satellite, saving 50% on data storage.",
      width: 450,
      height: 150
    },
    {
      title: "IT Profiency from Google",
      url: "/images/google-icon.svg",
      light_url: "/images/google-icon.svg",
      location: "Mount Wachusett Community College, Gardner, MA",
      date: "December 2021 - May 2022",
      li1: "Mastered Coursera and learned fundamental skills about Information Technology",
      li2: "Larned strategies to make customer service as easy and helpful as possible for everyone using laguages like Python, Java, and C++",
      li3: "Practiced customer service skills with 50+ simulations about computer issues",
      width: 125,
      height: 125
    },
  ]
  return (
    <>
      {jobs.map((job) => (
        // eslint-disable-next-line react/jsx-key
        <article  className="scroll-smooth scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin flex overflow-scroll overflow-x-hidden flex-col rounded-lg items-center space-y-10 flex-shrink-0
        w-[400px] h-[400px] md:w-[600px] xl:w-[700px] xs:w-[300px] snap-center ring-offset-2 bg-[#292929]  p-10
        hover:opacity-100 opacity-40 dark:opacity-100 cursor-pointer transition-opacity duration-200 ">
          <motion.div
            initial={{
              y: -100,
              opacity: 1
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" relative rounded-full xl:h-32 xl:h-42 ">
            <Image className='dark:hidden rounded-md' priority src={job.url}
              alt="" width={job.width} height={job.height} />
            <Image className="dark:block rounded-md" hidden priority src={job.light_url}
              alt="" width={job.width} height={job.height} />
          </motion.div>

          <div className='px-0 md:px-10'>
            <h4 className='text-xl font-bold text-[#F7AB0A]/80'>{job.title}</h4>
            <p className='font-soft text-lg font-bold mt-1'>{job.location}</p>
            <p>{job.date}</p>
            <ul className='list-disc space-y-2 ml-5 text-lg xs:text-base font-thin h-20'>
              <li>{job.li1}</li>
              <li>{job.li2}</li>
              <li>{job.li3}</li>
              {job.li4 && 
              <li>{job.li4}</li>}
            </ul>
          </div>
        </article>
      ))}
    </>
  )
}


export default ExpCard
