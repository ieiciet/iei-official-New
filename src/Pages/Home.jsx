import React from 'react'
import heroBg from '../assets/bg/bgHero.png'
import { Link } from 'react-router-dom';
import '../styles/home.css'
import SectionBg1 from "../assets/bg/sectionBg1.png"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-cards';

import '../styles/slider.css';

// import required modules
import { EffectCards } from 'swiper/modules';

// end slider

import {events} from '../utils/pastEvents'


function Home() {

  return (
    <div className='min-h-[100vh] relative z-[-2] bg-bg main-section'>
      <img src={heroBg} alt="" className='absolute h-screen w-screen object-cover z-[-1]' />
      <section className='h-[100vh] w-full'>
        <div className='flex flex-col justify-center items-center gap-6 h-full'>
          <div className='xs:w-[550px] w-[400px]'>
            <h1 className='text-white font-extrabold xs:text-[46px] text-[38px] text-center font-poppins'>IEI - One of the best technical club Lorem.</h1>
          </div>
          <div className='text-white sm:w-[600px] w-[400px] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate hic natus  doloribus! Magnam eos ipsa, nam pariatur fuga dolores dolorem ipsam quae?
          </div>
          <div className='flex flex-row justify-center items-center gap-5'>
            <div className='bg-gradient-to-r from-yellow-300 to-white rounded-full px-4 py-2 text-black w-[120px] text-center'> Join IE(I) </div>
            <div className='bg-black rounded-full px-4 py-2 text-white w-[120px] text-center hover:shadow-md'> About </div>
          </div>
        </div>
      </section>
      <section className='sm:px-20 xl:px-36 px-10 bg-bg w-full pt-14 pb-14 h-[100vh]'>

      </section>
      <section className='sm:px-20 xl:px-36 px-10 bg-bg flex w-full flex-col sm:flex-row justify-evenly pt-14 pb-14 h-fit second-section'>
        <div className='w-full sm:w-[55%] flex flex-col justify-center items-center relative'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards,Autoplay]}
          autoplay={{ delay: 3500 }}
          className="mySwiper"
        >
          {events.map((event,index) => (
            <SwiperSlide key={index}>
              <img src={event} alt="event" className='w-full h-full'/>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className='w-full sm:w-[45%] flex flex-col justify-center gap-14 sm:items-end items-center pt-10 sm:pt-0'>
          <h1 className='text-white sm:text-right font-poppins font-semibold text-[44px] text-center'>Our Recent Events</h1>
          <p className='text-gray-400 sm:text-right w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate hic natus  doloribus! Magnam eos ipsa, nam pariatur fuga dolores dolorem ipsam quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at quibusdam illo eaque. At, expedita! Quidem esse facilis ullam debitis, sunt eligendi. Error reiciendis a non eum quas dolore voluptas.</p>
          <Link to='/pastEvent' className='green-pink-gradient rounded-full p-3 pr-10 pl-10 w-fit'>View All Events</Link>
        </div>
      </section>
      
    </div>
  )
}

export default Home