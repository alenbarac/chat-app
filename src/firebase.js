// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBa1271zcMXYUmBM3CtsfRxYyLccyy2PSQ',
  authDomain: 'chat-app-dce78.firebaseapp.com',
  projectId: 'chat-app-dce78',
  storageBucket: 'chat-app-dce78.appspot.com',
  messagingSenderId: '641305241791',
  appId: '1:641305241791:web:459f1eb75c12c610edfe0a',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
