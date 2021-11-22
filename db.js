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


  
export function writeEventData(EventId, eventName){
    const db = getDatabase();
    set(ref(db, 'events/' + EventId), {
      name: eventName,
      
    });
  }

  //add test event with id=1 to db
  writeEventData(1,'test')


  let eventId = 3;

export default  get(child(dbRef, `events/`)).then((snapshot) => {
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

document.getElementById('modalSub').addEventListener('click',function writeFormData(name,organization,address,phoneNumber,date,startTime,endTime,description,category) {
    const db=getDatabase()
    let formId=3
    name= document.getElementById('name').value
    organization= document.getElementById('organization').value
    address= document.getElementById('address').value
    phoneNumber= document.getElementById('phone').value
    date= document.getElementById('date').value
    startTime= document.getElementById('start-time').value
    endTime= document.getElementById('end-time').value
    description= document.getElementById('description').value
    category=document.getElementById('SelectOption').value
        set(ref(db,'form/'+ formId), {
            fullname : name,
            organization : organization ,
            address : address ,
            phone: phoneNumber,
            date: date,
            startTime: startTime,
            endTime: endTime,
            description: description,
            category: category
            });}







)







