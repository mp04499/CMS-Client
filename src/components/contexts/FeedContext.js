/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useReducer,
  useLayoutEffect,
  useContext,
} from 'react';
import { UserContext } from './UserContext';
import FeedReducer from '../reducers/FeedReducer';
import { getPosts, listener, getPost } from '../../utils/Posts';
import firebase from '../../firebase';
import 'firebase/auth';

export const FeedContext = createContext();
export const DispatchContext = createContext();

export const FeedProvider = props => {
  const { user } = useContext(UserContext);
  const [feeds, dispatch] = useReducer(FeedReducer, []);

  useLayoutEffect(() => {
    if (!user) return;

    getPosts(user.uid).then(posts => dispatch({ type: 'SET', feed: posts }));
  }, [user]);
  return (
    <FeedContext.Provider value={feeds}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </FeedContext.Provider>
  );
};
