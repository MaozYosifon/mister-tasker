import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
    updateDoc,
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5hxxa6hcO2IktwSztA34P4HFr8qDpkdc",
    authDomain: "mister-tasker-c726d.firebaseapp.com",
    projectId: "mister-tasker-c726d",
    storageBucket: "mister-tasker-c726d.appspot.com",
    messagingSenderId: "109802129383",
    appId: "1:109802129383:web:2c164090fc8e22892a5f42"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)
const db = getFirestore()
// const db = getFirestore(app)
//const colRef = collection(db, 'task')


async function query(collectionName) {
    try {
        const entitiesSnapshop = await getDocs(collection(db, collectionName))
        return entitiesSnapshop.docs.map((doc) => {
            return { _id: doc.id, ...doc.data() }
        })
    } catch (error) {
        console.log('Had an error', error);
    }
}

async function getEntityById(collectionName) {

}

export const fireBaseService = {
    query

}