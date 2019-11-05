import * as React from 'react';
import { NotificationInterface } from 'interface';
import { DispatchContext } from '../contexts/NotificationContext';
import '../../css/Me.css';

const { memo, useContext } = React;
const Notification: React.FC<NotificationInterface> = ({ id, text }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div key={id} className="notification" style={{ height: '70px' }}>
      <button
        type="button"
        aria-label="delete"
        className="delete"
        key={id}
        id={id}
        onClick={(): void => dispatch({ type: 'REMOVE', id })}
      />
      {text}
    </div>
  );
};

export default memo(Notification);
