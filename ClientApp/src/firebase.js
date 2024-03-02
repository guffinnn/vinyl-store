import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8jOXRlMhOGlmEQW4ejPfCl8fFt4mSr_c",
    authDomain: "vinyl-store-35de3.firebaseapp.com",
    projectId: "vinyl-store-35de3",
    storageBucket: "vinyl-store-35de3.appspot.com",
    messagingSenderId: "131484474928",
    appId: "1:131484474928:web:0d9f05f6c52681142317f5",
    measurementId: "G-YP64BK4P8L"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };