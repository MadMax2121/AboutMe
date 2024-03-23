import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next';
import Head from "next/head";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';



//const inter = Inter({ subsets: ['latin'] })
const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] dark:bg-[rgb(250,249,246)] text-white h-screen snap-y snap-mandatory  
    overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth'>
      <Head>
        <title>Max&apos;s Portfolio</title>
      </Head>
        <Header/>

      <section id="hero" className='snap-start'> 
        <Hero />
      </section>
      
      <section  id='about' className = 'snap-center'>
        <About/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>

      <section id= "skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact/> 
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon className='h-10 w-10 dark:invert xl:mb-0 xs:mb-16 rounded-full
              cursor-pointer'/>
          </div>
        </footer>
     </Link>
      
    </div>
  );
};

export default Home;
