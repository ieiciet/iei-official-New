import React from 'react'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

export default function MemberCard({name, imgUrl, position, socialLinks, index}) {
  return (
    <Tilt className='xs:w-[220px] w-full'>
       <motion.div 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          
        </div>
      </motion.div>
    </Tilt>
  )
}
