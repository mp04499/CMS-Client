/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useParams } from 'react-router';
import { ProfileInterface, Follower } from 'interface';
import ProfileBlock from '../components/profile/ProfileBlock';
import Followers from '../components/profile/Followers';
import { getFollowers } from '../utils/User';

const { useState, useEffect } = React;
const Profile: React.FC<ProfileInterface> = ({ user, history }) => {
  const { t } = useParams();
  const [tab, setTab] = useState('profile');
  const [followers, setFollowers] = useState<Follower[]>([]);

  useEffect(
    () => {
      if (user) {
        getFollowers(user.uid, 'list').then(currentFollowers =>
          setFollowers(currentFollowers)
        );
      }
      if (t) setTab(t);
    },
    user ? [t, user.uid] : [t]
  );

  const currentBlock = (): React.ReactElement => {
    if (history) {
      if (tab === 'followers') return <Followers followers={followers} />;
      if (tab === 'following')
        return <ProfileBlock user={user} history={history} />;
      return <ProfileBlock history={history} user={user} />;
    }
    return <div />;
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
            onClick={(): void => setTab('profile')}
            onKeyDown={(): void => setTab('profile')}
            className={tab === 'profile' ? 'is-active' : undefined}
          >
            Profile
          </a>
          <a
            onClick={(): void => setTab('followers')}
            onKeyDown={(): void => setTab('followers')}
            className={tab === 'followers' ? 'is-active' : undefined}
          >
            Followers
          </a>
          <a
            onClick={(): void => setTab('following')}
            onKeyDown={(): void => setTab('following')}
            className={tab === 'following' ? 'is-active' : undefined}
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
