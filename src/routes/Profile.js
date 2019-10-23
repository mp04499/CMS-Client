/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileBlock from '../components/profile/ProfileBlock';
import Followers from '../components/profile/Followers';
import { getFollowers } from '../utils/User';

const Profile = ({ user }) => {
  const { t } = useParams();
  const [tab, setTab] = useState('profile');
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowers(user.uid).then(currentFollowers =>
      setFollowers(currentFollowers)
    );
    if (t) setTab(t);
  }, [t, user.uid]);

  const currentBlock = () => {
    if (tab === 'followers') return <Followers followers={followers} />;
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
