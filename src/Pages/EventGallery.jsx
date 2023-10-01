import React, { useState } from 'react';
import Title from '../components/Title';
import UploadForm from '../components/uploadform';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import '../styles/eventgal.css'

function EventGallery() {
  const [selectedImg, setSelectedImg] = useState(null); 
  
  return (
    <div className="EventGallery">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default EventGallery;
