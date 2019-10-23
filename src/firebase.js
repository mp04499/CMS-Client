import * as firebase from 'firebase/app';
import config from './config.json';

const prodConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const firebaseConfig =
  process.env.NODE_ENV === 'PRODUCTION' ? prodConfig : config.firebaseConfig;

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
