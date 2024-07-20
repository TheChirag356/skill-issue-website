import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const NotionLikeCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your API or data source
    // This is a placeholder for demonstration
    const fetchEvents = async () => {
      // Replace this with your actual API call
      const dummyEvents = [
        {
          title: 'Meeting',
          start: new Date(2024, 6, 20, 10, 0),
          end: new Date(2024, 6, 20, 11, 30),
        },
        {
          title: 'Lunch',
          start: new Date(2024, 6, 21, 12, 0),
          end: new Date(2024, 6, 21, 13, 0),
        },
      ];
      setEvents(dummyEvents);
    };

    fetchEvents();
  }, []);

  const customStyles = {
    calendar: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: '#f7f7f7',
      color: '#333',
      padding: '10px',
      fontWeight: 'bold',
    },
    event: {
      backgroundColor: '#e0f7fa',
      color: '#006064',
      borderRadius: '4px',
      border: 'none',
      padding: '2px 5px',
    },
  };

  return (
    <div style={customStyles.calendar}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={['month', 'week', 'day']}
        eventPropGetter={() => ({
          style: customStyles.event,
        })}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span>
        <strong>{date.format('MMMM')}</strong>
        <span> {date.format('YYYY')}</span>
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <button onClick={goToBack}>&#8592;</button>
        <button onClick={goToCurrent}>Today</button>
        <button onClick={goToNext}>&#8594;</button>
      </div>
      <div>{label()}</div>
      <div>
        <button onClick={() => toolbar.onView('month')}>Month</button>
        <button onClick={() => toolbar.onView('week')}>Week</button>
        <button onClick={() => toolbar.onView('day')}>Day</button>
      </div>
    </div>
  );
};

export default NotionLikeCalendar;