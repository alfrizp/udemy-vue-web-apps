import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC4Xul-SJ5ougJgpvoMgPZxhFD_xGQNFLs",
  authDomain: "udemy-vuewebapps-turnout.firebaseapp.com",
  databaseURL: "https://udemy-vuewebapps-turnout.firebaseio.com",
  projectId: "udemy-vuewebapps-turnout",
  storageBucket: "udemy-vuewebapps-turnout.appspot.com",
  messagingSenderId: "76058441329"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');