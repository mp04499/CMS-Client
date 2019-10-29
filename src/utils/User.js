import axios from 'axios';
import * as firebase from 'firebase';
import 'firebase/auth';
import constants from './constants';

export const getFollowers = async (uid, type) => {
  try {
    const response = await axios.get(constants.API.USER.FOLLOWERS, {
      params: { uid, type },
    });

    const { followers } = response.data;

    return followers;
  } catch (error) {
    return error;
  }
};

export const getFollowing = async (uid, type) => {
  try {
    const response = await axios.get(constants.API.USER.FOLLOWING, {
      params: { uid, type },
    });

    const { following } = response.data;

    return following;
  } catch (error) {
    return error;
  }
};

export const completeSignup = async (email, password, displayName) => {
  try {
    const response = await axios.post(constants.API.USER.COMPLETE, {
      email,
      password,
      displayName,
    });
    return response.status;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (uid, rest) => {
  try {
    const response = await axios.put(constants.API.USER.UPDATE, { uid, ...rest });
    return response.status;
  } catch (error) {
    return error;
  }
};

export const createCredentials = (email, password) => firebase
  .auth
  .EmailAuthProvider
  .credential(email, password);
