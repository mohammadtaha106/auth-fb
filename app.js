

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCwOlPxBOXaF4AKycAOXqxj1AnKlKvpxxM",
    authDomain: "my-second-project-d5b60.firebaseapp.com",
    projectId: "my-second-project-d5b60",
    storageBucket: "my-second-project-d5b60.appspot.com",
    messagingSenderId: "60241274432",
    appId: "1:60241274432:web:0ce2e80a4797b9712761a5",
    measurementId: "G-JBNX25K89G"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const email_login = document.getElementById('email_login')
  const password_login = document.getElementById('password_login')
  const login_btn = document.getElementById('login_btn')



  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  


  login_btn.addEventListener('click',()=>{
createUserWithEmailAndPassword(auth, email_login.value, password_login.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})