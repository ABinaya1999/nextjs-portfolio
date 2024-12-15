import React from 'react'
import Image from 'next/image'
import book from '../assets/book.png'
import pc from '../assets/pc.png'


const about = [
    {src:book, alt:"book", col:5, title:"Education", description:"Bachelor in Computer Engineering from Lalitpur Engineering College,TU"},
    {src:pc, alt:"pc", col:3, title:"Experience", description:"Backend Engineer at National Innovation Center"},
]

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
            About <span className='text-orange-400'>Me</span>
        </h1>
        <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>
            {about.map((link,index)=>(
            <div key={index} className={`w-full col-span-9 relative bg-white/10 backdrop-blur-bg-lg border border-white/20 rounded-xl overflow-hidden`}>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'>

                </div>
                <div className='flex flex-row p-6'>
                    <Image src={link.src} alt={link.alt} className='w-auto h-[130px]'/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2xl font-bold text-white/80'>{link.title}</h2>
                        <p className='text-lg tet-white/70 mt-2'>{link.description}</p>
                    </div>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default About