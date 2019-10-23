import React, { createContext, useState, useEffect } from 'react';
import firebase from '../../firebase';
import 'firebase/auth';

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
