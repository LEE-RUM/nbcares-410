import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap'

// import {writeEventData} from '../db.js'

// writeEventData(2,'test2')
// // getEventData();
// writeEventData(3, 'test3')
// import eventsPromise from '../db.js'




import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './main.css';


// const onEventClick = function(info) {
//   console.log('event clicked', info.event.title)
//   console.log(document.getElementById('calendarModal'))
//   // $('#modalTitle').html('test');
//   // $('#modalBody').html('test');
//   // $('#calendarModal').modal();
// }

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  
  var calendar = new Calendar(calendarEl, {
    eventDisplay: 'block',
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },  
    // eventClick: function(info) {
    //   alert(alert('Event: ' + info.event.title))
    // },
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true,
    eventMaxStack: 1,
    displayEventTime: true,
    events: [
      {
        title: 'Food Pantry',
        start: '2021-11-10T11:30:00'
      },  
      {
        title: 'Clothing Drive',
        start: '2021-11-10T11:00:00'
      },  
      {
        title: 'Hiring Event',
        start: '2021-11-11T09:00:00'
      }
    ]  
  });  
  
  // calendar.render();
//   let eventsArray = [      
//   {
//     id: 'a',
//     title: 'Example Event',
//     start: '2021-11-10T12:00:00',
//     location:'test location',
//     description: 'test description'
//   }
// ];
//   eventsPromise.then((res) => {
//     console.log('these are events', res)
//     // calendar.removeAllEvents()
//     calendar.addEventSource(eventsArray)
//   })  
  calendar.render()
  // console.log(calendar.getEvents())
  // console.log(calendar.getEventById('a'))
})  

  