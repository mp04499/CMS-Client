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
            <div className="navbar-item">
              <button className="button is-dark" onClick={signOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
