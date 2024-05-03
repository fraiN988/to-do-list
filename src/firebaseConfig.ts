import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE2zGb07ecZ5jmVYHir0CHgjqKv0vStE0",
  authDomain: "todolist-6128b.firebaseapp.com",
  projectId: "todolist-6128b",
  storageBucket: "todolist-6128b.appspot.com",
  messagingSenderId: "694636670032",
  appId: "1:694636670032:web:012aa34295e6abdefcf555",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export default firebaseApp;
