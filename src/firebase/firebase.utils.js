import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyAaxiNO8j7XGR52xtvtDglRCjKl8iEl_rw",
    authDomain: "e-commerceapp-804a2.firebaseapp.com",
    projectId: "e-commerceapp-804a2",
    storageBucket: "e-commerceapp-804a2.appspot.com",
    messagingSenderId: "15868416133",
    appId: "1:15868416133:web:2c38a492fec3a1326819ec",
    measurementId: "G-R96GY4PCL2"
      
}

export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;