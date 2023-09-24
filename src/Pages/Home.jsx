import React from 'react'
import heroBg from '../assets/bg/bgHero.png'

function Home() {
  return (
    <div className='min-h-[100vh]'>
      <img src={heroBg} alt="" className='absolute h-screen w-screen object-cover z-[-1]' />
      <section className='h-[100vh] w-full'>
        <div className='flex flex-col justify-center items-center gap-6 h-full'>
          <div className='xs:w-[550px] w-[400px]'>
            <h1 className='text-white font-extrabold xs:text-[46px] text-[38px] text-center font-poppins'>IEI CUIET (CSE) STUDENT'S CHAPTER</h1>
          </div>
          <div className='text-white sm:w-[600px] w-[400px] text-center'>
          IE(I) Student Chapter: Chitkara's technical society promoting innovation and technical excellence. Inspire, Learn, Engineer, Innovate, Achieve!
          </div>
          <div className='flex flex-row justify-center items-center gap-5'>
            <div className='bg-gradient-to-r from-yellow-300 to-white rounded-full px-4 py-2 text-black w-[120px] text-center'> Join IE(I) </div>
            <div className='bg-black rounded-full px-4 py-2 text-white w-[120px] text-center hover:shadow-md'> About </div>
          </div>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-bg'></section>
    </div>
  )
}

export default Home