import firebase from '../firebase';
import 'firebase/firestore';

const db = firebase.firestore();

export const getFollowers = async uid => {
  const querySnapshot = await db
    .collection('users')
    .doc(uid)
    .get();

  if (!querySnapshot.data()) return [];

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
