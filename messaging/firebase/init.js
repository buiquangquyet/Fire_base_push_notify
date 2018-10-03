/**
 * Created by quangquyet on 02/10/2018.
 */
// Initialize Firebase
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
console.log('Requesting permission...');
// [START request_permission]
messaging.requestPermission()
    .then(function () {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // [START_EXCLUDE]
        // In many cases once an app has been granted notification permission, it
        // should update its UI reflecting this.
        //resetUI();
        // [END_EXCLUDE]
        return messaging.getToken();
    })
    .then(function(token){
        console.log(token);
    })
    .catch(function (err) {
    console.log('Unable to get permission to notify.', err);
    });
// [END request_permission]

messaging.onMessage(function(payload){
    console.log('onMessage: '+payload);
});



