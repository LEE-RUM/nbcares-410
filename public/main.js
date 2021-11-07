import './calendar.js'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from '../.firebaseConfig.js'


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);
console.log(app)
console.log(database)




