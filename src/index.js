import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCEiObiNI-GR9JIHGf_xNgbRrZkM3xvKgg",
    authDomain: "hexnow-2004d.firebaseapp.com",
    databaseURL: "https://hexnow-2004d.firebaseio.com",
    projectId: "hexnow-2004d",
    storageBucket: "hexnow-2004d.appspot.com",
    messagingSenderId: "1068076272402"
}
firebase.initializeApp(config);

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
