//  import {getAuth} from '../db.js'
 import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged 
   } from 'firebase/auth'


const auth = getAuth()
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


const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
      //window.location = 'welcome.html';
      //alert("Succesful Login!");
    })
    .catch(err => {
      console.log(err.message)
    })
})

const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    alert("Signed in user!")
  } else {
    alert("No user!")
  }
});



