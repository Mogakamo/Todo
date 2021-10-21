import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//firebase imports
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./firebase/firebase-config";
import "firebase/compat/firestore";

//initialize firebase
firebase.initializeApp(firebaseConfig);

//exporting the db object from firestore
export const db = firebase.firestore();

db.collection("messages")
  .get()
  .then((r) => {
    r.docs.map((doc) => {
      console.log(doc.data());
    });
  });
createApp(App).use(store).use(router).mount("#app");
