//  import {getAuth} from '../db.js'
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
   } from 'firebase/auth'
// const auth = firebase.getAuth()
// const createUserWithEmailAndPassword = firebase.createUserWithEmailAndPassword()
// import {getAuth} from 'firebase/auth'
// console.log(getAuth)
// writeUserData(2, 'test name', 'testemail')

/* const auth = firebase.auth();

function signup(){
    let email = document.getElementById('email')
    console.log(email)
}
 */


const auth = getAuth()
console.log('testing')
console.log(getAuth)
console.log(createUserWithEmailAndPassword)
  const signupForm = document.querySelector('.signup')
  signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})
