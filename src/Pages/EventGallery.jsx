import React, { useState, useEffect } from 'react';
import { Faq } from '../components/Faq'
import Loader from '../Loader';
import '../App.css'
function EventGallery() {
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

    <div className='h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] bg-[#121212] flex items-center justify-center'>

      <Faq />
    </div>
    )}
    </>
  )
}

export default EventGallery