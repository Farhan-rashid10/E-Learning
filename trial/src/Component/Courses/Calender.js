// src/Calendar2024.js
import React from 'react';
import './Caleder.css';
import Sidebar from '../Sidebar';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const generateCalendar = (year) => {
  const months = [];
  
  for (let month = 0; month < 12; month++) {
    const days = [];
    const date = new Date(year, month, 1);
    const firstDay = date.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      days.push(null); // Empty spaces before the first day of the month
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(day);
    }

    months.push(days);
  }

  return months;
};

const Calendar = () => {
  const calendar = generateCalendar(2024);

  return (
    <>
    <Sidebar />
    <h1 className='root'> Calendar</h1>
    <div className="calendar">
      {MONTHS.map((month, monthIndex) => (
        <div key={monthIndex} className="month">
          <h2>{month}</h2>
          <div className="days">
            {DAYS.map((day) => (
              <div key={day} className="day">{day}</div>
            ))}
          </div>
          <div className="dates">
            {calendar[monthIndex].map((date, index) => (
              <div key={index} className="date">
                {date !== null ? date : ''}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Calendar;
