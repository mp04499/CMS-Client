import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NotificationListInterface } from 'interface';
import Notification from './Notification';
import '../../css/Notification.css';

const NotificationList: React.FC<NotificationListInterface> = ({
  notifications,
  dispatch
}) => {
  return (
    <TransitionGroup>
      {notifications.map(n => (
        <CSSTransition
          key={n.id}
          timeout={500}
          classNames="Notification"
          mountOnEnter
          unmountOnExit
        >
          <Notification
            dispatch={dispatch}
            key={n.id}
            id={n.id}
            text={n.text}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NotificationList;
