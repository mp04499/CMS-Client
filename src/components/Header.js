import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase';
import 'firebase/auth';
import { getFollowers, getFollowing } from '../utils/User';

const Header = ({ user }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const [displayName, setDisplayName] = useState('');

  const signOut = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const setInfo = async () => {
      if (!user) return;

      const currentFollowers = await getFollowers(user.uid);
      const currentFollowing = await getFollowing(user.uid);
      setFollowers(currentFollowers);
      setFollowing(currentFollowing);
      setDisplayName(user.displayName);
    };
    setInfo();
  }, [user]);

  return (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink className={'navbar-item'} to={'/home'}>
            Home
          </NavLink>
          {user ? (
            <NavLink className={'navbar-item'} to={'/me'}>
              Me
            </NavLink>
          ) : null}
        </div>
        <div className="navbar-end">
          {!user ? (
            <>
              <NavLink to={'/home'}>
                <div className="navbar-item">
                  <button className="button is-white">Login</button>
                </div>
              </NavLink>
              <div className="navbar-item">
                <NavLink to={'/signup'}>
                  <button className="button is-dark">Sign Up</button>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div
                className="field is-grouped is-grouped-multiline"
                style={{ marginTop: '15px', marginRight: '20px' }}
              >
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-white">Followers: </span>
                    <NavLink
                      to="/profile/followers"
                      className="tag is-info is-light"
                    >
                      {followers.length}
                    </NavLink>
                  </div>
                </div>
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-white">Following: </span>
                    <NavLink to="/me" className="tag is-info is-light">
                      {following.length}
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink className={'navbar-link'} to={'/me'}>
                  {displayName}
                </NavLink>
                <div className="navbar-dropdown">
                  <NavLink to="/profile" className="navbar-item">
                    Profile
                  </NavLink>
                </div>
              </div>
              <div className="navbar-item">
                <button
                  className="button is-primary is-light"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
