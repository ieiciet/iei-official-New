import React, { useState, useEffect } from 'react';
import UpcomingEvent from '../components/UpcomingEvent';
import PastEvent from '../components/PastEvent';
import EventGallery from '../components/EventGallery';
import '../App.css'
import Loader from '../Loader';
function Event() {
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

    <div>
      <UpcomingEvent />
      <PastEvent />
      <EventGallery/>
    </div>
    )}
        </>

  );
}

export default Event;
