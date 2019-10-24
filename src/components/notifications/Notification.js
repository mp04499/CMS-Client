import React, { memo, useContext } from 'react';
import { DispatchContext } from '../contexts/NotificationContext';
import '../../css/Me.css';

const Notification = ({ id, text }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div key={id} className="notification" style={{ height: '70px' }}>
      <button className="delete" key={id} id={id} onClick={() => dispatch({ type: 'REMOVE', id })} />
      {text}
    </div>
  );
};

export default memo(Notification);
