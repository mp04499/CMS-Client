import React, {createContext, useReducer} from "react";
import NotificationReducer from '../reducers/NotificationReducer';

const defaultNotifications = [
  {
    id: 0,
    text: "First Notification Here"
  },
  {
    id: 1, text: "Second Notification Here"
  }];

export const NotificationContext = createContext();
export const DispatchContext = createContext();

export const NotificationProvider = props => {

  const [notifications, dispatch] = useReducer(NotificationReducer, defaultNotifications);

  return (
    <NotificationContext.Provider value={notifications}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </NotificationContext.Provider>
  );

};
