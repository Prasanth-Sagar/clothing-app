import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyD3kQUetGyTZBYLaXNd82quwPYIM4lbINc",
  authDomain: "shopping-db-cf7bb.firebaseapp.com",
  databaseURL: "https://shopping-db-cf7bb.firebaseio.com",
  projectId: "shopping-db-cf7bb",
  storageBucket: "shopping-db-cf7bb.appspot.com",
  messagingSenderId: "953683801973",
  appId: "1:953683801973:web:1068d957fc304fad2fc53c",
  measurementId: "G-PMN494KKXR"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // console.log(firestore.doc('users/123dfdj53hvh'))
  console.log('Snapshot --> ', snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error) {
      console.log('Error creating user ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;