import React from 'react'
import { PhoneArrowDownLeftIcon, ArrowUpCircleIcon, MapPinIcon, InboxIcon } from '@heroicons/react/20/solid'
import emailjs from "@emailjs/browser";
import Link from 'next/link';



type Props = {}

function Contact({ }: Props) {
    const sendEmail = (e) => {
        e.preventDefault();
        alert("submitted");
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY)

    }
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className=' pt-20 text-4xl font-semibold text-center'>
                    I've got just what you need.{" "}
                    <span className='decoration-[#F7AB0A] /50 underline'>Let's Talk</span>
                </h4>

                <div className='space-y-10 '>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneArrowDownLeftIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>(617)-548-8589</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <InboxIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>gmail</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>51 Guild road</p>
                    </div>
                </div>

                <form onSubmit={sendEmail}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className="contactInput"  name = "from_name" type="text" />
                        <input placeholder="Email" className="contactInput" name = "email_from" type="email" />
                    </div>

                    <input   placeholder="Subject" className="contactInput" name= "subject" type="text" />

                    <textarea placeholder="Message" name = "message" className="contactInput" />
                    <button type="submit" className='bg-[#f7Ab0A] py-5 px-10 rounded-md text-black font-bold
                text-lg'>Submit</button>
                </form>
            </div>
            <Link href="#hero">
                <footer className='sticky bottom-5 w-full cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <ArrowUpCircleIcon
                        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
                        cursor pointer'/>
                    </div>
                </footer>
            </Link>
        </div>
    )
}

export default Contact