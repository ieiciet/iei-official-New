import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


export default function MemberCard({name, imgUrl, position, socialLinks, index}) {
  return (
    <Tilt className='xs:w-[250px] w-full'>
       <motion.div 
        initial={{scale: 0.5, opacity: 0, y:100}}
        whileInView={{scale: 1,opacity: 1, y:0}}
        transition={{duration: 0.5}}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <motion.div 
            className='p-1 green-pink-gradient rounded-full'
            // initial={{scale: 0.5, opacity: 0}}
            // whileInView={{scale: [0.5,0.6,1.5,1],opacity: [0,1,1,1] ,rotate:[0,720,1440,720]}}
            // transition={{duration: 0.5,times:[0,0.2,0.6,1]}}
            // viewport={{ once: true}}
          >
            <img src={imgUrl} alt="image" className='rounded-full h-[90px] w-[90px]'/>
          </motion.div>
          <div>
            <div className='text-center text-white font-bold text-[30px]'>{name}</div>
            <div className='text-center text-secondary text-[16px]'>{position}</div>
          </div>
          <div className='flex flex-row justify-center items-center xs:gap-4 gap-10'>
            <a href={socialLinks[0].url} target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600'/>
            </a>
            <a href={socialLinks[1].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <FaGithub className='text-orange-600'/>
            </a>
            <a href={socialLinks[2].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <HiOutlineMail className='text-green-300'/>
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}
