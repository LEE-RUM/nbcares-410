import { eventsPromise } from '../db';
console.log('admin')
let eventsArray = [];
console.log('hello')
eventsPromise.then((events)=> {
    
    eventsArray = Object.values(events)
    console.log('all events:', eventsArray)
    let titles = document.getElementsByClassName('event-list-title')
    let eventStatuses = document.getElementsByClassName('event-status')
    let locations = document.getElementsByClassName('')
    console.log(titles[0])
    //TODO in the future, dynamically create the whole html element not just the innerText
    //loop through events instead of titles, create new list item for each event
    for(let i = 0; i<titles.length; i++){
        eventStatuses[i].innerText = eventsArray[i].isApproved ? 'Approved' : 'Pending Approval'
        titles[i].innerText=eventsArray[i].title
        console.log(eventsArray[i].title)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    console.log('hello from admin js')
})

