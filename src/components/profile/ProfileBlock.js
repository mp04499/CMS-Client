/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { createCredentials, updateUser } from '../../utils/User';

const ProfileBlock = ({ user, history }) => {
  const [currentPassword, updateCurrentPassword] = useInput('');
  const [password, updatePassword] = useInput('');
  const [displayName, updateDisplayName] = useInput('');
  const [email, updateEmail] = useInput('');
  const [errors, updateErrors] = useState([]);

  const updateProfile = async () => {
    const credentials = createCredentials(user.email, currentPassword);
    try {
      const authenticated = await user.reauthenticateWithCredential(credentials);
      if (authenticated) {
        const allUpdates = { password, displayName, email };
        const values = Object.values(allUpdates).filter((value) => value !== '');
        const updates = {};
        values.forEach((value) => {
          const entries = Object.entries(allUpdates).filter((e) => e[1] === value);
          const key = entries[0][0];
          updates[key] = value;
        });

        const status = await updateUser(user.uid, updates);

        if (status === 200) history.push('/me');
      }
    } catch (error) {
      updateErrors([...errors, error]);
    }
  };
  return (
    <>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-unlock" aria-hidden="true" />
        </span>
        <input
          className="input"
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={updateCurrentPassword}
        />
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-lock" aria-hidden="true" />
        </span>
        <input
          className="input"
          type="password"
          placeholder="New Password"
          value={password}
          onChange={updatePassword}
        />
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-user" aria-hidden="true" />
        </span>
        <input
          className="input"
          type="text"
          placeholder="Change Display Name"
          value={displayName}
          onChange={updateDisplayName}
        />
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-envelope" aria-hidden="true" />
        </span>
        <input
          className="input"
          type="text"
          placeholder="Change Email"
          value={email}
          onChange={updateEmail}
        />
      </a>
      <button
        onClick={updateProfile}
        type="button"
        className="button is-success is-light"
        style={{ marginLeft: '5px', marginTop: '5px', marginBottom: '5px' }}
      >
        <span className="icon is-small">
          <i className="fas fa-check" />
        </span>
        <span>Save</span>
      </button>
    </>
  );
};

ProfileBlock.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default ProfileBlock;
