import React from 'react'
import heroBg from '../assets/bg/bgHero.png'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
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
            <Link to='/event'>
              <button className='bg-gradient-to-r from-yellow-300 to-white rounded-full px-4 py-2 text-black w-[120px] text-center'>
                Join IE(I)
              </button>
            </Link>
            <Link to='/about'>
              <button className='bg-black rounded-full px-4 py-2 text-white w-[120px] text-center hover:shadow-md'>
                About
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero