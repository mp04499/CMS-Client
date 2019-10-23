import firebase from '../firebase';
import 'firebase/firestore';

const db = firebase.firestore();

export const getFollowers = async uid => {
  const querySnapshot = await db
    .collection('users')
    .doc(uid)
    .get();

  const { followers } = querySnapshot.data();

  return followers;
};

export const getFollowing = async uid => {
  const querySnapshot = await db
    .collection('users')
    .doc(uid)
    .get();

  const { following } = querySnapshot.data();

  return following;
};

export const getUser = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  });
};
