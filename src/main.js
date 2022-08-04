import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA5hxxa6hcO2IktwSztA34P4HFr8qDpkdc",
//   authDomain: "mister-tasker-c726d.firebaseapp.com",
//   projectId: "mister-tasker-c726d",
//   storageBucket: "mister-tasker-c726d.appspot.com",
//   messagingSenderId: "109802129383",
//   appId: "1:109802129383:web:b4f84212cadd19e32a5f42"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import './assets/styles/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
