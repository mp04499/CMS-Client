import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext } from '../contexts/NotificationContext';
import '../../css/Me.css';

const Notification = ({ id, text }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div key={id} className="notification" style={{ height: '70px' }}>
      <button type="button" aria-label="delete" className="delete" key={id} id={id} onClick={() => dispatch({ type: 'REMOVE', id })} />
      {text}
    </div>
  );
};

export default memo(Notification);

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
