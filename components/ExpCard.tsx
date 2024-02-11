import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}






function ExpCard({ }: Props) {


  const jobs = [
    {
      title: "Software Engineering Internship",
      url: "/images/rocket.png",
      location: "Mission Space, Boston, MA",
      date: "05/2023 - 08/2023",
      li1: "Used Arduino IDE to program the sensors, accelerometers and gyroscopes of a small satellite (1U CubeSat) that launched 10km into space.",
      li2: "Created a program using C++ to analyze and store the data from the satellite on an SD card, including data from a Geiger counter, which calculates nearby radiation in the satellite.",
      li3: "Utilized JavaScript to display information about the satellite on a screen, such as its location and current temperature, maximizing the efficiency of the device while in space.",
      width: 96,
      height: 144
    },
    {
      title: "IT Maintenance",
      url: "/images/job.png",
      location: "Enrollment Management, UMASS Boston, MA",
      date: "8/2022 - 5/2023",
      li1: "Created a program using Java to manage and display 100+ items of inventory in a sleek fashion, where users can add and remove data.",
      li2: "Maintained and set up 50+ workstations for new employees and helped them set up their technological environment in the workspace.",
      li3: "Handled up to 5 customer service issues a day relating to computer problems, from hardware to setting up the computer onto the domain, as well as recovering/backing up devices.",
      width: 150,
      height: 150
    },
    {
      title: "IT Profiency from Google",
      url: "/images/google-icon.svg",
      location: "Mount Wachusett Community College, Gardner, MA",
      date: "12/2021 - 5/2022",
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
        w-[400px] h-[400px] md:w-[600px] xl:w-[700px] xs:w-[300px] snap-center ring-offset-2 bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 ">
          <motion.div
            initial={{
              y: -100,
              opacity: 1
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" relative rounded-full xl:h-32 xl:h-42 ">
            <Image priority src={job.url}
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
            </ul>
          </div>
        </article>
      ))}
    </>
  )
}


export default ExpCard
