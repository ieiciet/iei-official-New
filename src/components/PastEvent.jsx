import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

function PastEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const API_URL = 'https://iei-api.cyclic.app/event/past/';

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <div className='main-p min-h-screen '>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white px-6 font-bold text-[40px] font-poppins">Past Event</div>
          <div className='w-full h-[1px] bg-white mb-10'></div>
        </div>
        <div className="pastEvents flex flex-wrap gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PastEvent;
