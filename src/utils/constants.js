export default
{
  Nav: {
    INDEX: '/',
    HOME: '/home',
    ME: '/me',
  },
  API: {
    USER: {
      FOLLOWERS: process.env.REACT_APP_USER_FOLLOWERS,
      FOLLOWING: process.env.REACT_APP_USER_FOLLOWING,
      COMPLETE: process.env.REACT_APP_USER_COMPLETE,
      UPDATE: process.env.REACT_APP_USER_UPDATE,
    },
  },
};
