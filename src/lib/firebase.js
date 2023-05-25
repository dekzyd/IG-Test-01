import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD3goKs8sF8ewVQUA0_y9F0JHGPZDRiYi0",
  authDomain: "instagram-30684.firebaseapp.com",
  projectId: "instagram-30684",
  storageBucket: "instagram-30684.appspot.com",
  messagingSenderId: "1035212797769",
  appId: "1:1035212797769:web:5bf9fe4bf31a7b9eb24c98",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
