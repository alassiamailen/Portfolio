"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { UseSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from './active-section-context';

export default function Intro() {

    const {ref} =UseSectionInView("Home",0.5);
   const {setActiveSection,setTimeOfLastClick}= useActiveSectionContext();
    
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
           <div className='relative'>
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1, scale:1}}
            transition={{type:"tween",duration:0.2}}
            >
                <Image src='https://res.cloudinary.com/djoj7kslq/image/upload/v1696962020/me/1643232039066_szwun7.jpg'
                alt='Mailen photo'
                width='192'
                height='192'
                quality='95'
                priority={true}
                className='h-24.1 w-24.1 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
                <motion.span initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:125,delay:0.1,duration:0.7}} className='absolute text-4xl bottom-0 right-0'>💻</motion.span>
          
           </div>
        </div>
        <motion.h1 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I m Mailen.</span> I m a{" "}
        <span className="font-bold">full-stack developer, </span> 
        <span className="font-bold">my passion{" "}</span>is to transform ideas into powerful and functional code. <span className="italic">I m ready to challenge the limits</span>. I specialize in{" "}
        <span>JavaScript and I love learning new technologies.</span>
        </motion.h1>
        <motion.div initial={{opacity:0, y:100}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
            <Link href="#contact" className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            onClick={()=>{
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}
            >Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> {" "}
            </Link>          

            <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack' href="https://linkedin.com" target="_blank">
                <BsLinkedin/>
            </a>

            <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href="https://github.com" target="_blank">
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
