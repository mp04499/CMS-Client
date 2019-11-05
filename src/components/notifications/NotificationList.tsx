import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NotificationContext } from '../contexts/NotificationContext';
import Notification from './Notification';
import '../../css/Notification.css';

const NotificationList: React.FC<{}> = () => {
  const { useContext } = React;
  const notifications = useContext(NotificationContext);

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
          <Notification key={n.id} id={n.id} text={n.text} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NotificationList;
