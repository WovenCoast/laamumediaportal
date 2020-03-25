// Initialization
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });

// Express initialization
const express = require('express');
const webserver = express();
webserver.use(express.json());
webserver.use(express.urlencoded({ extended: true }));
webserver.set('views', './views')
webserver.set('view engine', 'ejs');
webserver.use(express.static(path.join(__dirname, './public'), { index: false, extensions: ['.css', '.js'] }));

// Firebase initialization
// const admin = require('firebase-admin');
// const firebaseServiceAccount = require('./laamumediaserviceacc.json');
// const firebase = admin.initializeApp({
// 	credential: admin.credential.cert(firebaseServiceAccount)
// });
// const auth = firebase.auth();

// const firebase = require('firebase');

// var firebaseConfig = {
// 	apiKey: "AIzaSyDulLqNzVmA_9BT_E5m-UTZyQ2BcJoD_3M",
// 	authDomain: "laamu-media-test.firebaseapp.com",
// 	databaseURL: "https://laamu-media-test.firebaseio.com",
// 	projectId: "laamu-media-test",
// 	storageBucket: "laamu-media-test.appspot.com",
// 	messagingSenderId: "535758010989",
// 	appId: "1:535758010989:web:062be195e1e298bd275d64",
// 	measurementId: "G-SRN6G9MCXZ"
// };
// firebase.initializeApp(firebaseConfig);

// Routing
webserver.get('/', (req, res) => {
	res.status(200).render('loginRegister', { domain: req.headers.host });
});
webserver.get('/dashboard', (req, res) => {
	res.status(200).render('dashboard', { domain: req.headers.host });
})

// Listen and handle 404 requests
webserver.use((req, res, next) => {
	res.status(404).render('404', { url: req.baseUrl, domain: req.headers.host });
});
webserver.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${process.env.PORT || 3000}`)
});