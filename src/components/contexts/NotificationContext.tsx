import * as React from 'react';
import { NotificationInterface } from 'interface';
import NotificationReducer from '../reducers/NotificationReducer';

const defaultNotifications = [
  {
    id: '0',
    text: 'First Notification Here'
  },
  {
    id: '1',
    text: 'Second Notification Here'
  }
];

const { createContext, useReducer } = React;
export const NotificationContext = createContext<NotificationInterface[]>([]);
export const DispatchContext = createContext({} as React.Dispatch<any>);

export const NotificationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [notifications, dispatch] = useReducer(
    NotificationReducer,
    defaultNotifications
  );

  return (
    <NotificationContext.Provider value={notifications}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </NotificationContext.Provider>
  );
};
