import React from 'react';
import UpcomingEvent from '../components/UpcomingEvent';
import PastEvent from '../components/PastEvent';

function Event() {
  return (
    <div>
      <UpcomingEvent />
      <PastEvent />
    </div>
  );
}

export default Event;
