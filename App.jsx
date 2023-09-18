import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UpcomingEvent from './Pages/UpcomingEvent';
import PastEvent from './Pages/PastEvent';
import TeamIei from './Pages/TeamIei';
import EventGallery from './Pages/EventGallery';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/upcomingEvent" element={<UpcomingEvent/>}/>
      <Route path="/pastEvent" element={<PastEvent/>}/>
      <Route path="/teamIei" element={<TeamIei/>}/>
      <Route path="/eventgallery" element={<EventGallery/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App