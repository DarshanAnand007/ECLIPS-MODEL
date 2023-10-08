import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EclipseCalendar = () => {
  // Define an array of dates that correspond to eclipse events
  const eclipseDates = ['2023-10-15', '2023-11-14', '2023-12-14']; // Add your eclipse dates here

  // Function to customize tile content with eclipse image
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // Check if the current date is in the eclipseDates array
      if (eclipseDates.includes(date.toISOString().split('T')[0])) {
        return <img src="/assets/solareclipse.avif" alt="Eclipse" />;
      }
    }
    return null;
  };

  return (
    <Calendar
      tileContent={tileContent}
      view="month"
    />
  );
};

export default EclipseCalendar;
