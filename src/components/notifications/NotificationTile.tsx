import * as React from 'react';
import {
  NotificationContext,
  DispatchContext
} from '../contexts/NotificationContext';
import NotificationList from './NotificationList';
import '../../css/Notification.css';

const NotificationTile: React.FC<{}> = () => {
  const { useContext } = React;
  const notifications = useContext(NotificationContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div className="tile is-child box Notification-Tile">
      <p className="title">Notifications</p>
      <NotificationList notifications={notifications} dispatch={dispatch} />
    </div>
  );
};

export default NotificationTile;
