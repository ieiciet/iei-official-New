import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpcomingEvent() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://iei-api.cyclic.app/event/upcoming/';

    axios.get(apiUrl)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='min-h-full bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-sans mb-4 mt-4">
        Events
      </h2>
      <div className='main-u'>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white px-6 font-bold text-[40px] font-poppins">Upcoming Event</div>
          <div className='w-full h-[1px] bg-white mb-10'></div>
        </div>
        <div className="upcomingEvent mt-10 md:flex md:justify-center">
          {eventData && eventData.map((event) => (
            <div key={event._id} className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:w-9/12 bg-tertiary bg-opacity-60">
              <img className="object-contain w-full h-72 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg" src={event.Image} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EventName: {event.EventName}</h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {event.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Venue: {event.Venue}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Date: {event.Date}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Time: {event.Time}
                </p>
                <div className="flex justify-start">
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Register Now
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvent;
