import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import piCountries from "@/public/countriesPI.png";
import Adip from "@/public/adip.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Soy Henry bootcamp",
    location: "Argentina",
    description:
      "I graduated after 4 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Argentina,Bs.As",
    description:
      "I worked as a front-end developer for 1 month, we designed a project for a soccer club in La Plata.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "UTN-Applied Informatics",
    location: "Argentina, Bs.As",
    description:
      "I am currently in my second year of the Tecnicatura Superior in Applied Informaticss",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Countries",
    description:
      "I worked as a full-stack developer on this project. The platform offers data on countries, offers sorting and pagination system for easy navigation.",
    tags: ["React", "Redux", "PostgreSQL", "Sequelize"],
     imageUrl: piCountries,
  },
  {
    title: "A.D.I.P",
    description:
      "The site offers different services for members and players. The objective of the platform is to facilitate the approach to the member, the communication and the payment of the club fee. ",
    tags: ["React", "TypeScript", "Redux","PostgreSQL","typeORM"],
     imageUrl: Adip,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"]
  //    imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",  
  "React",
  "Next.js",
  "Node.js",
  "Git", 
  "Redux",  
  "Express",
  "PostgreSQL",  
  "Sequelize"
] as const;