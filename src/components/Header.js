import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase';
import 'firebase/auth';
import { UserContext } from './contexts/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  const signOut = e => {
    firebase.auth().signOut();
  };
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
          <NavLink className={'navbar-item'} to={'/me'}>
            Me
          </NavLink>
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
                    <NavLink to="/me" className="tag is-info is-light">
                      1
                    </NavLink>
                  </div>
                </div>
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-white">Following: </span>
                    <NavLink to="/me" className="tag is-info is-light">
                      1
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink className={'navbar-link'} to={'/me'}>
                  {user.displayName}
                </NavLink>
                <div className="navbar-dropdown">
                  <NavLink to="/settings" className="navbar-item">
                    Account Settings
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
