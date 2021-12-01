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
  let categorySelected = {

  }
  let isSmallScreen = window.innerWidth < 500;
  console.log(isSmallScreen)
  
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 500px)").matches) {
      console.log("Screen width is at least 500px")
      isSmallScreen = false
      console.log(isSmallScreen)
    } else {
      console.log("Screen less than 500px")
      isSmallScreen = true
      console.log(isSmallScreen)
    }
  })
  
  //TODO: make array of events to add after submit button is pressed
  //pass events to newEventsArray on condition that event.category=checkbox.id 
  //for checked=true checkbox
  //call updateEvents(newEventsArray) or something similar on submit button click
  
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
      initialView: isSmallScreen ? 'listWeek': 'dayGridMonth',
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
      themeSystem: 'bootstrap',
      headerToolbar: isSmallScreen ? {left:'prev,next',center:'',right:'title'} :{
        left: 'prev,next,today',
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
            console.log('small screen flag inside calendar:', isSmallScreen)
            
            eventsPromise.then((events)=> {
              console.log('events array:', eventsArray)
              
              eventsArray = Object.values(events)
              calendar.addEventSource(eventsArray)
              
              document.getElementById('Housing').addEventListener("click", isChecked);
              document.getElementById('Employment').addEventListener("click", isChecked);
              document.getElementById('Education').addEventListener("click", isChecked);
              document.getElementById('Financial').addEventListener("click", isChecked);
              document.getElementById('Healthcare').addEventListener("click", isChecked);
              document.getElementById('Mental').addEventListener("click", isChecked);
              document.getElementById('Family').addEventListener("click", isChecked);
              document.getElementById('Children').addEventListener("click", isChecked);
              document.getElementById('Other').addEventListener("click", isChecked);
              function isChecked(){
                if(this.checked){
                  console.log('checked')
                  console.log(this.id)
                } else {
                  console.log('not checked')
                };
                categorySelected[this.id]=this.checked
                updateCalendar()
                console.log(categorySelected)
              }
              
              let filteredEvents = [];
              function updateCalendar(){
                for(let i in eventsArray){
                  let currentEvent=(eventsArray[i])
                  if(categorySelected[currentEvent.category]==true){
                    filteredEvents.push(currentEvent)
                    console.log(filteredEvents)
                  }
                }
                calendar.removeAllEvents()
                calendar.addEventSource(filteredEvents)
                filteredEvents = []
                // filteredEvents = []
                // console.log(filteredEvents)
              }
  })
  calendar.render()
  // console.log(calendar.getEvents())
  // console.log(calendar.getEventById('a'))
})  

  