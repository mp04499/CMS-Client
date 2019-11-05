import * as React from 'react';
import { Post } from 'interface';
import { UserContext } from './UserContext';
import FeedReducer from '../reducers/FeedReducer';
import { getPosts } from '../../utils/Posts';

const { createContext, useReducer, useLayoutEffect, useContext } = React;
export const FeedContext = createContext({} as Post[]);
export const DispatchContext = createContext({} as React.Dispatch<any>);

export const FeedProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { user } = useContext(UserContext);
  const [feeds, dispatch] = useReducer(FeedReducer, []);

  useLayoutEffect(() => {
    if (!user) return;

    getPosts(user.uid).then(posts => dispatch({ type: 'SET', feed: posts }));
  }, [user]);

  return (
    <FeedContext.Provider value={feeds}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </FeedContext.Provider>
  );
};
