import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAvZsCxszOfqm3lgMxeEpR0D2Y1AKDTTJQ",
  authDomain: "dkroyer-b14b2.firebaseapp.com",
  databaseURL: "https://dkroyer-b14b2.firebaseio.com",
  projectId: "dkroyer-b14b2",
  storageBucket: "dkroyer-b14b2.appspot.com",
  messagingSenderId: "25273876330"
};

firebase.initializeApp(config);
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
