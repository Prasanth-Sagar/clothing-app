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

// The below function stores the user auth object when we sign in with google and stores it in the database

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const colletionRef = firestore.collection('users');
  // console.log(firestore.doc('users/123dfdj53hvh'))

  const snapShot = await userRef.get();
  console.log('Snapshot --> ', snapShot);
  console.log('Snapshop data --> ', snapShot.data());
  const collectionSnapshot = await colletionRef.get();
  // console.log('COLLECTION SNAPSHOT IS --> ', collectionSnapshot.docs[0].data());
  // console.log('COLLECTION SNAPSHOT IS --> ', collectionSnapshot.docs.map(doc => doc.data()));
  const cData = {collection: collectionSnapshot.docs.map(doc => doc.data())};
  console.log('cData --> ', cData);

  // The below code creates a snapshot if it doesn't exist
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log('COLLECTIONREF --> ', collectionRef);
  console.log('OBJECTSTOADD --> ', objectsToAdd);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit()
}

firebase.initializeApp(config);

// firebase.database().ref.set({
//   name: 'Victoria'
// })



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;