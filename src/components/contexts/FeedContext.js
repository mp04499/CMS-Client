import React, {
  createContext,
  useReducer,
  useLayoutEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext';
import FeedReducer from '../reducers/FeedReducer';
import { getPosts } from '../../utils/Posts';

export const FeedContext = createContext();
export const DispatchContext = createContext();

export const FeedProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [feeds, dispatch] = useReducer(FeedReducer, []);

  useLayoutEffect(() => {
    if (!user) return;

    getPosts(user.uid).then((posts) => dispatch({ type: 'SET', feed: posts }));
  }, [user]);

  return (
    <FeedContext.Provider value={feeds}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </FeedContext.Provider>
  );
};

FeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
