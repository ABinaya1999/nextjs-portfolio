"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import project1 from "../assets/proj1.png"
import project2 from "../assets/proj2.png"

const projects = [
    {title:"E-commerce", description:"This is a ecommerce website", devStack:"django | python", git:"https://github.com/ABinaya1999/django-ecommerce", src:project1, link:"#"},
    {title:"Todo", description:"This is a todo website", devStack:"react | nextjs | typescript", git:"https://github.com/ABinaya1999/nextjs-todo", src:project2, link:"#"}
]
const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id="porfolio">
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
            Selected <span className='text-orange-400'>Projects</span>
        </h1>
        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
            {projects.map((project, index)=> (
                <motion.div
                    key={index}
                    initial={{opacity:0, y:75}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay:0.25}}
                    className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" 
                    : "md:flex-row "}`}
                >
                    <div className='space-y-2 max-w-[550px]'>
                        <h2 className='text-7xl my-4 text-white/70'>{`0${index +1}`}</h2>
                        <h2 className="text-7xl">{project.title}</h2>
                        <p className='text-lg text-white/70 break-words p-4'>{project.description}</p>
                        <h2 className='text-xl text-orange-400 font-semibold' >{project.devStack}</h2>
                        <div className='w-64 h-[1px] bg-gray-400 my-4'>
                            <a href={project.link} className='mr-6'>Link</a>
                            <a href={project.git}>Git</a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image src={project.src} alt={project.title} className="h-[350px] w-auto object-cover border-rounded border-gray-700"/>
                    </div>

                </motion.div>
            ))}

        </div>
    </div>
  )
}

export default Portfolio