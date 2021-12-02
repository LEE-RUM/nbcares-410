import { eventsPromise } from '../db';
console.log('admin')
let eventsArray = [];
console.log('hello')
eventsPromise.then((events)=> {
    
    eventsArray = Object.values(events)
    console.log('all events:', eventsArray)
    let titles = document.getElementsByClassName('event-list-title')
    let locations
    console.log(titles[0])
    for(let i = 0; i<titles.length; i++){
        titles[i].innerText=eventsArray[i].title
        console.log(eventsArray[i].title)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    console.log('hello from admin js')
})

