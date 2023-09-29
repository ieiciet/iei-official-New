import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_URL = 'https://iei-api.cyclic.app/event/past/';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24">
    <div className="flex flex-col items-center justify-center">
          <div className="text-white px-6 font-bold text-[24px] md:text-[40px] font-poppins">Event Gallery</div>
          <div className='w-full h-[1px] bg-white mb-10'></div>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
         <div key={image.id} className="overflow-hidden transition-transform hover:scale-105">
         <img
           src={image.Image}
           alt={image.description}
           className="w-full h-auto"
         />
       </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default EventGallery;
