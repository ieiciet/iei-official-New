import React from 'react'
import logo from '../assets/icons/logo.png'
import chitkaraLogo from '../assets/bg/CU_logo.png'
import { Link } from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'

export default function NavBar() {
  return (
    <nav className='px-6 bg-[#1d1a1a] fixed w-full z-[3] bg-opacity-30'>
        <div className='flex-row items-center justify-between hidden sm:inline-flex bg-nav bg-opacity-30 backdrop-blur-sm w-full rounded-lg px-4 py-2 mt-4'>
            <div className='flex flex-row items-center gap-1'>
              <div className='h-10 w-10'><img src={logo} alt=""/></div>
              <RxCross2 className='text-white'/>
              <div className='h-10 w-10 mt-[7px]'><img src={chitkaraLogo} alt=""/></div>
            </div>
            <div className='flex flex-row items-center justify-center gap-5 text-white'>
              <Link to='/' relative='path' className='hover:text-orange-500'>Home</Link>
              <Link to='/teamIei' relative='path' className='hover:text-orange-500'>Teams</Link>
              <Link to='/upcomingEvent' relative='path' className='hover:text-orange-500'>Upcoming Events</Link>
              <Link to='/pastEvent' relative='path' className='hover:text-orange-500'>Past Events</Link>
              <Link to='/eventgallery' relative='path' className='hover:text-orange-500'>Event Gallery</Link>
              <Link to='/contact' relative='path' className='hover:text-orange-500'>Contact</Link>
            </div>
            <div></div>
        </div>
    </nav>
    
  )
}
