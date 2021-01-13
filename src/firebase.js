import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLUXWTLBy1n6Vdp1t2ywJjjUaRb9pQBIQ",
  authDomain: "place-2a3d2.firebaseapp.com",
  databaseURL:
    "https://place-2a3d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "place-2a3d2",
  storageBucket: "place-2a3d2.appspot.com",
  messagingSenderId: "631212011547",
  appId: "1:631212011547:web:af43325a601dc94c8048be",
  measurementId: "G-J29EELB7WS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const cardsCollection = db.collection("cards");

export const createCard = async (card) => {
  const id = (await cardsCollection.get()).size + 1;
  return await cardsCollection.doc(`${id}`).set(card);
};

export const getCard = async (id) => {
  const card = await cardsCollection.doc(id).get();
  return card.exist ? card.data() : null;
};
