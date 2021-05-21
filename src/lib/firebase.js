import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB9kPk3HIkyW7J99D4CdLtkwQkc74R2jqQ",
    authDomain: "fir-sample-e4e31.firebaseapp.com",
    projectId: "fir-sample-e4e31",
    storageBucket: "fir-sample-e4e31.appspot.com",
    messagingSenderId: "1052191436339",
    appId: "1:1052191436339:web:caf631defb338510847d46"
};

import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB9kPk3HIkyW7J99D4CdLtkwQkc74R2jqQ",
    authDomain: "fir-sample-e4e31.firebaseapp.com",
    projectId: "fir-sample-e4e31",
    storageBucket: "fir-sample-e4e31.appspot.com",
    messagingSenderId: "1052191436339",
    appId: "1:1052191436339:web:caf631defb338510847d46"
};

firebase.initializeApp(firebaseConfig); 
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 