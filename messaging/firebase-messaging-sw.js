importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyA-YQJhydNrWqf_YDbRwkILl-R93MbDbVA",
    authDomain: "pushnotifyweshop.firebaseapp.com",
    databaseURL: "https://pushnotifyweshop.firebaseio.com",
    projectId: "pushnotifyweshop",
    storageBucket: "pushnotifyweshop.appspot.com",
    messagingSenderId: "206437348258"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();