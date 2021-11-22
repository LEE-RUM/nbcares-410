import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap'
import { Tooltip } from 'bootstrap';
// import './dist/main.js'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './main.css';
// import './dist/main.css'
// import {writeEventData} from '../db.js'
import { eventsPromise } from '../db';



document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  // var calendarModal = document.getElementById('calendarModal')
  // console.log(calendarModal)
  
  // const onEventClick = function(info) {
  //   console.log('event clicked', info.event.title)
  //   // console.log(calendarModal)
  //   // $('#modalTitle').html('test');
  //   // $('#modalBody').html('test');
  //   // $('#calendarModal').modal();
  // }
  
  var calendar = new Calendar(calendarEl, {
    eventDisplay: 'block',
    // initialView: 'listWeek',
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },  
    eventClick: function(info) {

      },
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true,
      eventMaxStack: 1,
      displayEventTime: true,
      nowIndicator: true,
      eventDidMount: function(info) {
        var tooltip = new Tooltip(info.el, {
          title: info.event.title,
          placement: 'top',
          trigger: 'hover',
          container: 'body',
          animation: true,
          // template: `<div class="tooltip" role="tooltip">
          // <div class="arrow"></div>
          // <div class="tooltip-inner"></div>
          // event location<br/> event description<br/>
          // event start time<br/> event end time</div>`
        });
      },
      // events: [
      //   {
      //     title: 'Food Pantry',
      //     start: '2021-11-10T11:30:00'
      //   },  
      //   {
      //     title: 'Clothing Drive',
      //     start: '2021-11-10T11:00:00'
      //   },  
      //   {
      //     title: 'Hiring Event',
      //     start: '2021-11-11T09:00:00'
      //   }
      // ]  
    });  
  
  let eventsArray = [];
  eventsPromise.then((events)=> {
    eventsArray = Object.values(events)
    console.log('events array:', eventsArray)
    calendar.addEventSource(eventsArray)
  })
  calendar.render()
  // console.log(calendar.getEvents())
  // console.log(calendar.getEventById('a'))
})  

  