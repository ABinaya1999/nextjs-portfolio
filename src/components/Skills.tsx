import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython, FaDocker } from 'react-icons/fa';
import { SiDjango, SiFastapi } from "react-icons/si";
const skillIcons = [
    {icon:<FaHtml5 size={140} />, label:"HTML"},
    {icon:<FaCss3Alt size={140}/>, label:"CSS"},
    {icon:<FaJsSquare size={140}/>, label:"JavaScript"},
    {icon:<FaPython size={140} />, label:"Python"},
    {icon:<SiDjango size={140}/>, label:"Django"},
    {icon:<SiFastapi size={140}/>, label:"FastAPI"},
    {icon:<FaReact size={140}/>, label:"React"},
    {icon:<FaDocker size={140}/>, label:"Docker"},
]
const Skills = () => {
  return (
    <div className='bg-skill_custom-gradient py-32'>
        <div className='text-white  max-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
                {skillIcons.map((skill, index)=>(
                    <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[200px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Skills