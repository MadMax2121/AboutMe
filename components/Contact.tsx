import React from 'react'
import { PhoneArrowDownLeftIcon, ArrowUpCircleIcon, MapPinIcon, InboxIcon } from '@heroicons/react/20/solid'
import emailjs from "@emailjs/browser";
import Link from 'next/link';



type Props = {}

function Contact({ }: Props) {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Thanks for sending an email!");
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, e.currentTarget, process.env.NEXT_PUBLIC_PUBLIC_KEY!)

    }
    return (
        <div className=' xs:scale-75 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-custom-gray text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-5 dark:text-black'>
                <h4 className='pt-20 xl:pt-20 text-xl xl:text-2xl font-semibold text-center'>
                    I&apos;ve got just what you need.{" "}
                    <span className='decoration-[#F7AB0A] /50 underline'>Let&apos;s Talk</span>
                </h4>

                <div className='space-y-3 xl-space-y-6'>
                    <div className='flex items-center space-x-3 justify-center'>
                        <PhoneArrowDownLeftIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-md'>(617)-548-8589</p>
                    </div>

                    <div className='flex items-center space-x-3 justify-center'>
                        <InboxIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-md'>mmoskalenko21@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-3 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-md'>100 Morrissey Blvd, Boston, MA</p>
                    </div>
                </div>

                <form onSubmit={sendEmail}
                    className='flex flex-col space-y-2 w-auto mx-auto'>
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className="contactInput" name="from_name" type="text" />
                        <input placeholder="Email" className="contactInput" name="email_from" type="email" />
                    </div>

                    <input placeholder="Subject" className="contactInput" name="subject" type="text" />

                    <textarea placeholder="Message" name="message" className="contactInput" />
                    <button type="submit" className='bg-[#f7Ab0A] py-2 lg:p-5 px-10 rounded-md text-black font-bold
                text-lg'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact