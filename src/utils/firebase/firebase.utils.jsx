import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDckW_E4LnK6i6H5KCZTT5twvp1vbM46g0",
  authDomain: "nma-blog-db.firebaseapp.com",
  projectId: "nma-blog-db",
  storageBucket: "nma-blog-db.appspot.com",
  messagingSenderId: "402278220238",
  appId: "1:402278220238:web:1e05f7b3789f9b93686b9f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const db = getFirestore();
export const createUserFromGoogleSignIn = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
}