import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import NotificationReducer from '../reducers/NotificationReducer';

const defaultNotifications = [
  {
    id: 0,
    text: 'First Notification Here',
  },
  {
    id: 1, text: 'Second Notification Here',
  }];

export const NotificationContext = createContext();
export const DispatchContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, dispatch] = useReducer(NotificationReducer, defaultNotifications);

  return (
    <NotificationContext.Provider value={notifications}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
