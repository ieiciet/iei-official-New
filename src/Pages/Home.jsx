import React from 'react'
import heroBg from '../assets/bg/bgHero.png'
import { Link } from 'react-router-dom';
import '../styles/home.css'
import SectionBg1 from "../assets/bg/sectionBg1.png"
import RecentEvents from '../components/recentEvents';


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
      <section className='sm:px-20 xl:px-36 px-10 bg-bg w-full pt-14 pb-14 h-[100vh] flex'>
        <div className='flex flex-col py-11 w-[60%] gap-6 pr-9 justify-evenly'>
          <h1 className='text-white sm:text-left font-poppins font-bold text-[44px] text-center mb-4'>About IE(I)</h1>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ea unde, nisi, veniam asperiores mollitia aliquid obcaecati quis nostrum quaerat nihil ipsam ut! Esse eaque repudiandae iusto quos. Perferendis, officiis.</p>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ea unde, nisi, veniam asperiores mollitia aliquid obcaecati quis nostrum quaerat nihil ipsam ut! Esse eaque repudiandae iusto quos. Perferendis, officiis.</p>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ea unde, nisi, veniam asperiores mollitia aliquid obcaecati quis nostrum quaerat nihil ipsam ut! Esse eaque repudiandae iusto quos. Perferendis, officiis.</p>
        </div>
        <div className='green-pink-gradient h-full w-[40%] rounded-md'>

        </div>

      </section>
      <RecentEvents/>
      
    </div>
  )
}

export default Home