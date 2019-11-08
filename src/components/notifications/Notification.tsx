import * as React from 'react';
import { NotificationInterface } from 'interface';
import '../../css/Me.css';

const { memo } = React;
const Notification: React.FC<NotificationInterface> = ({
  id,
  text,
  dispatch
}) => {
  const handleClick = (): void => {
    dispatch({ type: 'REMOVE', id });
  };
  return (
    <div key={id} className="notification" style={{ height: '70px' }}>
      <button
        type="button"
        aria-label="delete"
        className="delete"
        key={id}
        id={id}
        onClick={handleClick}
      />
      {text}
    </div>
  );
};

export default memo(Notification);
