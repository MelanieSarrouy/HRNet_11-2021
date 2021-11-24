import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_HRNET_API_KEY,
  authDomain: process.env.REACT_APP_HRNET_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_HRNET_PROJECT_ID,
  storageBucket: process.env.REACT_APP_HRNET_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_HRNET_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_HRNET_APP_ID,
}


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)