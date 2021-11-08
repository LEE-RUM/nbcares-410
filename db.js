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
  
  //adding a user with id 1 to the db
  writeUserData(1,'test','test@test.com')
  
  function writeEventData(EventId, eventName){
    const db = getDatabase();
    set(ref(db, 'events/' + EventId), {
      name: eventName,
      
    });
  }
  writeEventData(1,'test')
  
  //reading user 1 info from db
  let userId = 1;
  const dbRef = ref(getDatabase());
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