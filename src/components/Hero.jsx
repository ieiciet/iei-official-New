import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/background-animation.css';
import '../styles/home.css'

const Hero = () => {
  return (
    <section className="relative block md:flex bg-animation h-[100vh] flex items-center justify-center ">
      <div className="area -z-50 absolute w-full h-full">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="max-w-screen-xl px-4 py-16 lg:py-32 lg:flex lg:flex-col lg:items-center text-white">
        <div className='w-full md:w-[550px] overflow-hidden'>
          <h1 className='text-white text-4xl md:text-5xl text-center font-poppins font-black	'>
            IE(I) CUIET CSE STUDENT'S CHAPTER  Punjab
          </h1>
        </div>
        <div className='text-white w-full md:w-[600px] text-center mt-4'>
          IE(I) Student Chapter: Chitkara's technical society promoting innovation and technical excellence. Inspire, Learn, Engineer, Innovate, Achieve!
        </div>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/event"
            className="block w-full md:w-auto rounded border gradiant px-4 md:px-6 py-2 text-sm md:text-base font-medium"
          >
            Upcoming Event
          </Link>
          <Link
            to="/EventGallery"
            className="block w-full md:w-auto rounded border px-4 md:px-6 py-2 text-sm md:text-base font-medium text-white btn"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;