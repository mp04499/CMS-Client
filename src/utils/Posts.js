import firebase from '../firebase';
import 'firebase/firestore';

const db = firebase.firestore();

export const getPosts = async uid => {
  try {
    const querySnapshot = await db
      .collection('users')
      .doc(uid)
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .get();

    const posts = [];
    querySnapshot.forEach(post => posts.push({ ...post.data(), id: post.id }));

    return posts;
  } catch (error) {
    return error;
  }
};

export const createPost = async (uid, message) => {
  try {
    db.collection('users')
      .doc(uid)
      .collection('posts')
      .add({ message, timestamp: new Date() });
  } catch (error) {
    console.log(error);
  }
};

export const listener = async uid =>
  db
    .collection('users')
    .doc(uid)
    .collection('posts');
