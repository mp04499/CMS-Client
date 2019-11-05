import * as React from 'react';
import { UserProviderInterface } from 'interface';
import firebase from '../../firebase';
import 'firebase/auth';

const { createContext, useState, useEffect } = React;
export const UserContext = createContext({} as UserProviderInterface);

export const UserProvider: React.FC<{ children: React.ReactChildren }> = ({
  children
}) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authState = firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return (): void => {
      authState();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
