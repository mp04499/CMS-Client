/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Constants } from 'interface';

const constants: Constants = {
  API: {
    USER: {
      FOLLOWERS: process.env.REACT_APP_USER_FOLLOWERS!,
      FOLLOWING: process.env.REACT_APP_USER_FOLLOWING!,
      COMPLETE: process.env.REACT_APP_USER_COMPLETE!,
      UPDATE: process.env.REACT_APP_USER_UPDATE!
    },
    REVIEW: {
      CREATE: process.env.REACT_APP_REVIEW_CREATE!
    }
  }
};

export default constants;
