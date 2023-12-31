"use client";


import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { UseSectionInView } from '@/lib/hooks';
import { SendEmail } from '@/actions/sendEmail';
import toast from "react-hot-toast";

export default function Contact() {

    const {ref} =UseSectionInView("Contact");
   
  return (
    <motion.section 
        ref={ref}
        id="contact" 
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:example@gmail.com">alassiamailen3@gmail.com</a>{" "}or through this form.</p>

        <form className='mt-10 flex flex-col dark:text-black' 
            action={async (formData)=>{
              const {data,error}= await SendEmail(formData)  
              if(error){
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!")
            }}>
            <input name="senderEmail" required maxLength={500} type="email" className='h-14 rounded-lg borderBlack dark_bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder=' Your email'/>
            <textarea name="message" maxLength={5000} placeholder='Your message ' className='h-52 my-3 rounded-lg borderBlack p-4 dark_bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'></textarea>
            <button type="submit" className=' group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 hover:scale-110  active:scale-105 dark:bg-white dark:bg-opacity-10 '>
                Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}
            </button>
        </form>
    </motion.section>
  )
}
