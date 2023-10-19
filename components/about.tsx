"use client";
import React from 'react';
import SectionHeading from './section-heading';
import {motion} from "framer-motion";
import { UseSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} =UseSectionInView("About");


  return (
    <motion.section  ref={ref} initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.175}} id="about" className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
        <SectionHeading>About me</SectionHeading>

        <p className="mb-3">
        While studying{" "}
        <span className="font-medium">Applied Computer Science at UTN</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
        JavaScript, React, Node.js and Next.js
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>,I like to paint, build figures with clay and spend time with friends. I also like to {" "}
        <span className="font-medium">learning new things</span>. I am currently
        {" "}
        <span className="font-medium">working to improve my English.</span>
      </p>
    </motion.section>
  )
}
