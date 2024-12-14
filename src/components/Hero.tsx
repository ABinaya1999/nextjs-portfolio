import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import cursor from '@/assets/icon1.png'; 
import lightning from '@/assets/icon2.jpg'
import profilepic from '@/assets/profilepic.png'
const Hero = () => {

    return (
        <div className="py-24 relative overflow-clip bg-custom-gradient">
            <div className='absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000 80%, #2B1942'>

            </div>
            <div className='relative'>
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Binay Raj Parajuli</h1>
                </div>

                {/* <motion.div
                    className="absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={cursor}
                        alt="Cursor Icon"
                        width={50} // Adjust dimensions as necessary
                        height={50}
                    />
                </motion.div>

                <motion.div
                    className="absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={lightning}
                        alt="Cursor Icon"
                        width={50} // Adjust dimensions as necessary
                        height={50}
                    />
                </motion.div> */}
        
                <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
                    I am a Software Engineer leveraging my knowledge in Python(Django) and JavaScript(React).
                </p>
                <Image
                    src={profilepic}
                    alt="profile-pic"
                    className='h-auto w-auto mx-auto'
                    />
            </div>
        </div>
    );
};

export default Hero;
