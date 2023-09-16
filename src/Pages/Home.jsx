import React, { useLayoutEffect } from 'react'
import heroBg from '../assets/bg/bgHero.png'
import '../styles/home.css'

import {events} from '../utils/pastEvents'


function Home() {

  // useEffect(() => {
  //   gsap.to(leftAbout.current,{
  //     scrollTrigger:{
  //       trigger: aboutRef.current,
  //       pin: true,
  //       start: "top top",
  //       end: "bottom bottom",
  //       endTrigger:lastEle.current,
  //       scrub: 1,
  //     },
  //     y:"-100%",
  //   })
  // },[]);


  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const boxes = self.selector('.box');
  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         scrollTrigger:{
  //           trigger: rightAbout.current,
  //           pin: true,
  //           start: "top top",
  //           end: "bottom bottom",
  //           endTrigger:lastEle.current,
  //           scrub: 1,
  //         },
  //         y:"-100%",
  //       });
  //     });
  //   }, main.current); // <- Scope!
  //   return () => ctx.revert(); // <- Cleanup!
  // }, []);

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
      {/* <section className='w-full bg-bg relative drop-shadow-section sm:px-20 xl:px-36 px-10 about-section min-h-[100vh] ' ref={main} >     
        <div className='flex flex-row w-[100%] h-[100%] ' ref={aboutRef}>
          <div className='text-white  w-[50%] overflow-auto' ref={leftAbout}>
            <div className='h-[100vh] bg-white box'></div>
            <div className='h-[100vh] bg-red-400 box' ref={lastEle}></div>
          </div>
          <div className='images  w-[50%]' ref={rightAbout}>
            <h1 className='text-white'>fixed text</h1>
          </div>
        </div>
      </section> */}
      <section className='min-h-[100vh] sm:px-20 xl:px-36 px-10 bg-bg'>

      </section>
      
    </div>
  )
}

export default Home