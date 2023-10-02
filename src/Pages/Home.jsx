import React from 'react'
import About from '../components/About';
import Hero from '../components/Hero';
import { Faq } from '../components/Faq';
import Testimonials from '../components/Testimonials';
import RecentEvents from '../components/RecentEvents';

function Home() {

  return (
    <div>
        <Hero/>
        <About/>
        <RecentEvents/>
        <section className='sm:px-20 xl:px-36 px-10 bg-bg w-full pt-14 pb-14 h-[100vh]'><Testimonials/></section>
        <section className='sm:px-20 xl:px-36 px-10 bg-bg w-full pt-14 pb-14 h-[100vh]'>
          <Faq />
      </section>
    </div>
  )
}

export default Home