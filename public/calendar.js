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
import eventsPromise from '../db.js'




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
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },  
    eventClick: function(info) {
      alert(alert('Event: ' + info.event.title))
    },
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      // {
      //   id: 'a',
      //   title: 'Example Event',
      //   start: '2021-10-26T12:00:00'
      // },  
      // {
      //   title: 'Example Event 5',
      //   start: '2021-10-28T12:30:00'
      // },  
      // {
      //   title: 'Example Event 3',
      //   start: '2021-10-27T12:00:00'
      // },  
      // {
      //   title: 'Example Event 2',
      //   start: '2021-10-26T16:00:00'
      // },  
      // {
      //   title: 'Example Event 1',
      //   start: '2021-10-26T14:00:00'
      // },  
    ]  
  });  
  
  // calendar.render();
  let eventsArray = [      
  {
    id: 'a',
    title: 'Example Event',
    start: '2021-11-10T12:00:00',
    location:'test location',
    description: 'test description'
  }
];
  eventsPromise.then((res) => {
    console.log('these are events', res)
    // calendar.removeAllEvents()
    calendar.addEventSource(eventsArray)
  })  
  calendar.render()
  // console.log(calendar.getEvents())
  // console.log(calendar.getEventById('a'))
})  

  