import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCjLTRtO2PAwQx8u9Ch6x5flxDZnZ_L3k4",
   authDomain: "employee-vgs-app.firebaseapp.com",
   databaseURL: "https://employee-vgs-app.firebaseio.com",
   projectId: "employee-vgs-app",
   storageBucket: "gs://employee-vgs-app.appspot.com",
   messagingSenderId: "980032957180"
 };
 firebase.initializeApp(config);

 firebase.database().ref().set({
    name: 'andrew'
 })
