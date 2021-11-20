import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '/.firebaseConfig.js'
import { getDatabase, ref, set, get, child } from "firebase/database";


const app = initializeApp(firebaseConfig);
// import { getAnalytics } from "firebase/analytics";

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
  title: 'Example Event',
  start: '2021-11-15T12:00:00',
  location:'test location',
  description: 'test description'
}
  
let testEventObject6 = {
  id: 6,
  title: 'Example Event',
  start: '2021-11-17T12:00:00',
  location:'test location',
  description: 'test description'
}
  
export function writeEventData(eventObject){
    const db = getDatabase();
    set(ref(db, 'events/' + eventObject.id), {
      id: eventObject.id,
      title: eventObject.title,
      start: eventObject.start,
      location: eventObject.location,
      description: eventObject.description 
    });
  }
writeEventData(testEventObject5)
writeEventData(testEventObject6)




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
