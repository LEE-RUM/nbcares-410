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
      window.location = 'index.html';
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
      window.location = 'index.html';
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
        window.location = 'index.html';
    })
    .catch(err => {
      console.log(err.message)
    })
})

console.log('testtest')
// console.log(onAuthStateChanged())
// let user = firebase.auth().currentUser;
// console.log(user)

onAuthStateChanged(auth, (user)=>{
  if(user){
    console.log('user is signed in')
    document.getElementById('logout-button').style.display='block'
    document.getElementById('register-button').style.display='none'
    // document.getElementById('cal').style.display='block'
    document.getElementById('login-button').style.display='none'
    document.getElementById('admin-button').style.display='block'
    // document.getElementById('reso').style.display='block'
    console.log(user)
  } else{
    document.getElementById('logout-button').style.display='none'
    // document.getElementById('cal').style.display='none'
    document.getElementById('login-button').style.display='block'
    document.getElementById('register-button').style.display='block'
    document.getElementById('admin-button').style.display='none'
    // document.getElementById('reso').style.display='none'
    console.log('user signed out')
  }
})


// var cssRuleCode = document.all ? 'rules' : 'cssRules';
// var rules = document.styleSheets[2][cssRuleCode];
// console.log(rules)


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     alert("Signed in user!")
//   } else {
//     alert("No user!")
//   }
// });

