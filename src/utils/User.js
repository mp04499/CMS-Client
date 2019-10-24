import axios from 'axios';

export const getFollowers = async (uid, type) => {
  try {
    const response = await axios.get('/user/followers', {
      params: { uid, type },
    });

    const { followers } = response.data;

    return followers;
  } catch (error) {
    console.log(error);
  }
};

export const getFollowing = async (uid, type) => {
  try {
    const response = await axios.get('/user/following', {
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
    const response = await axios.post('/user/complete', {
      email,
      password,
      displayName,
    });
    return response.status;
  } catch (error) {
    return error;
  }
};
