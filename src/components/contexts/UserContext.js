import React, { createContext, useState, useEffect } from 'react';
import firebase from '../../firebase';
import 'firebase/auth';

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
