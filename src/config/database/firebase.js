import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDbnOvddVUOpl5uQtVptDzSA20Lby5wSSU",
  authDomain: "ecommerse-web-app.firebaseapp.com",
  databaseURL: "https://ecommerse-web-app.firebaseio.com",
  projectId: "ecommerse-web-app",
  storageBucket: "ecommerse-web-app.appspot.com",
  messagingSenderId: "781523524567",
  appId: "1:781523524567:web:0d833b16922d59be3b0992"
};
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);









