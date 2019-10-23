/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ProfileBlock from '../components/profile/ProfileBlock';
import Followers from '../components/profile/Followers';

const Profile = () => {
  const [tab, setTab] = useState('profile');

  const currentBlock = () => {
    if (tab === 'followers') return <Followers />;
    else if (tab === 'following') return <ProfileBlock />;
    else return <ProfileBlock />;
  };

  return (
    <>
      <article
        className="panel"
        style={{ width: '500px', marginLeft: '400px' }}
      >
        <p className="panel-heading">Profile</p>
        <p className="panel-tabs">
          <a
            onClick={() => setTab('profile')}
            className={tab === 'profile' ? 'is-active' : null}
          >
            Profile
          </a>
          <a
            onClick={() => setTab('followers')}
            className={tab === 'followers' ? 'is-active' : null}
          >
            Followers
          </a>
          <a
            onClick={() => setTab('following')}
            className={tab === 'following' ? 'is-active' : null}
          >
            Following
          </a>
        </p>
        {currentBlock()}
      </article>
    </>
  );
};

export default Profile;
