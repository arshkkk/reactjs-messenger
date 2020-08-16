const firebase = require('firebase')
firebase.initializeApp({
    apiKey: "AIzaSyCM0jdSyAq_03SBK9NoDoLgeXtitlPCCG4",
    authDomain: "fb--messenger.firebaseapp.com",
    databaseURL: "https://fb--messenger.firebaseio.com",
    projectId: "fb--messenger",
    storageBucket: "fb--messenger.appspot.com",
    messagingSenderId: "995768802429",
    appId: "1:995768802429:web:c754e0dfba4106182de514",
    measurementId: "G-NRXV7MF518"
  })

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}