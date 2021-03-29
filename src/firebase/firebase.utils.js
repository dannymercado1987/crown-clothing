import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7cXG-M4ErvCeK1g0gohbUXxepu3nT7xM",
    authDomain: "crown-db-25c69.firebaseapp.com",
    projectId: "crown-db-25c69",
    storageBucket: "crown-db-25c69.appspot.com",
    messagingSenderId: "76531507920",
    appId: "1:76531507920:web:cbba99af1dbcac4bb2b4d5",
    measurementId: "G-KPL6B3EG0H"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
