import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '/.firebaseConfig.js'
import { getDatabase, ref, set, get, child } from "firebase/database";


const app = initializeApp(firebaseConfig);
// import { getAnalytics } from "firebase/analytics";

// export let getAuthFunction = getAuth;

function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
  }
  
  //adding a user with id 2 to the db
  writeUserData(2,'test','test@test.com')
  
  //reading user 2 info from db
  let userId = 2;
  const dbRef = ref(getDatabase());
  function getUserData(userId){
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log('data should appear here:')
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }); 
  }

getUserData(userId)


let testEventObject5 = {
  id: 5,
  title: 'Education Event',
  start: '2021-11-25T10:00:00',
  location:'test location',
  description: 'test description',
  category: 'Education'
}
  
let testEventObject6 = {
  id: 6,
  title: 'Housing Event',
  start: '2021-11-23T14:00:00',
  location:'test location',
  description: 'test description',
  category: 'Housing'
}
let testEventObject7 = {
  id: 7,
  title: 'Job Fair',
  start: '2021-11-25T12:00:00',
  location:'test location',
  description: 'test description',
  category: 'Employment'
}
let testEventObject8 = {
  id: 8,
  title: 'Covid Testing',
  start: '2021-11-26T14:00:00',
  location:'test location',
  description: 'test description',
  category: 'Healthcare'
}
let testEventObject9 = {
  id: 9,
  title: 'Family Event',
  start: '2021-11-27T16:00:00',
  location:'test location',
  description: 'test description',
  category: 'Family'
}

  
export function writeEventData(eventObject){
    const db = getDatabase();
    set(ref(db, 'events/' + eventObject.id), {
      id: eventObject.id,
      title: eventObject.title,
      start: eventObject.start,
      location: eventObject.location,
      description: eventObject.description, 
      category: eventObject.category
    });
  }
writeEventData(testEventObject5)
writeEventData(testEventObject6)
writeEventData(testEventObject7)
writeEventData(testEventObject8)
writeEventData(testEventObject9)



  // let eventId = 3;

export let eventsPromise = get(child(dbRef, `events/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('event data should appear here:')
      console.log(snapshot.val());
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
}); 

// getAllEvents()
  // });

/*
//Testing Form Data
function writeFormData(formId, name, org) {
    const db = getDatabase();
    set(ref(db, 'form/' + formId), {
      name: name,
      org: org,
    });
  }
writeFormData(1,'test-form name','test-form-org')

let formId = 1;
  const dbRefform = ref(getDatabase());
  get(child(dbReffrom, `form/${formId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('data should appear here:')
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
*/

function getRandomInt() {
  return Math.floor(Math.random() * 1000000);
}

console.log('randomInt=', getRandomInt())

document.getElementById('modalSub').addEventListener('click',function writeFormData(name,organization,address,phoneNumber,eventName, date,startTime,endTime,description,category) {
    const db=getDatabase()
    let eventId=getRandomInt()
    name= document.getElementById('name').value
    organization= document.getElementById('organization').value
    address= document.getElementById('address').value
    phoneNumber= document.getElementById('phone').value
    eventName= document.getElementById('event-name').value
    date= document.getElementById('date').value
    startTime= document.getElementById('start-time').value
    let start = date + "T" + startTime + ":00"
    endTime= document.getElementById('end-time').value
    description= document.getElementById('description').value
    category=document.getElementById('SelectOption').value
        set(ref(db,'events/'+ eventId), {
            fullname : name,
            organization : organization ,
            address : address ,
            phone: phoneNumber,
            title: eventName,
            date: date,
            // startTime: startTime,
            start: start,
            endTime: endTime,
            description: description,
            category: category
            });}







)







