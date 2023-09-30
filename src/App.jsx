import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import UpcomingEvent from './components/UpcomingEvent';
import PastEvent from './components/PastEvent';
import TeamIei from './Pages/TeamIei';
import EventGallery from './Pages/EventGallery';
import Contact from './Pages/Contact';
import NavBar from './components/NavBar';
import Event from './Pages/Event';
import Registration from './Pages/Registration';
import Footer from './components/Footer';
import Loader from './Loader';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or any async operation
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  
  return (
    <>
          {loading ? <Loader /> : (
<>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/event/registration" element={<Registration/>}/>
      <Route path="/upcomingEvent" element={<UpcomingEvent/>}/>
      <Route path="/pastEvent" element={<PastEvent/>}/>
      <Route path="/teamIei" element={<TeamIei/>}/>
      <Route path="/eventgallery" element={<EventGallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
          )}
    </>
  )
}

export default App