import React from 'react';
import '../styles/timeline.css';
import '../styles/dark_theme/timeline.css';

const Timeline = () => {
  const events = [
    {
      year: '2015 - 2019',
      title: 'Bachelor of Computer Engineering',
      description: 'PICT, Pune, India',
      details: [
        'CGPA: 8.2/10',
        'Universal Rhapsody: A Deep Learning based project which recognizes the genre of playing music in real time and suggests the best audio equalizer setting. Secured 2nd position in PICT InC 2019.',
        'Web Design Head, Impetus and Concepts, PICT: Designed and maintained a website for PICT InC 2018 to display all the upcoming events of the annual consortium.',
        'Integrated a payment gateway for all the events on the InC website.',
        'Android App Developer, PICT: Created an Android app for the motive of helping students and teachers in the college. The project was submitted and approved by the Principal, PICT.',
      ],
    },
    {
      year: 'Expected 2023',
      title: 'Master of Computer Science (Negotiated Learning)',
      description: 'University College Dublin',
      details: [
        'Relevant Coursework: Distributed Systems, Cloud Computing, Advanced Data Structures, Information Security.',
      ],
    },
    {
      year: 'Aug 2019 - Oct 2021',
      title: 'Software Engineer',
      description: 'Quest-Global (formerly Mobiliya) Pune, India',
      details: [
        'Designed and maintained several UI components integrated with the back-end.',
        'Developed a Command Center UI for Thin-Clients in React.',
        'Engineered Command Center microservices in Golang.',
      ],
    },
    {
      year: 'Oct 2021 - Aug 2022',
      title: 'Software Engineer',
      description: 'Talentica Software Pune, India',
      details: [
        'Developed core UI components for an Industry Leading Debt Platform App.',
        'Engineered various Drop-In Modules (DIMs) to isolate different modules containing separate business logic, which was being used by 100k+ users.',
        'Revamped Identity Management (IDM) mechanism using Auth0 to handle a large influx of users.',
        'Optimized old UI components and designed new UI components for a Hybrid Data Platform Company, which monitored millions of queries per day.',
      ],
    },
  ];

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="event-year">{event.year}</div>
          <div className="event-details">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <ul className="event-info">
              {event.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
