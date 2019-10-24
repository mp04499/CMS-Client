/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useInput from '../hooks/useInput';

const ProfileBlock = ({ user }) => {
  const [currentPassword, updateCurrentPassword] = useInput('');
  const [password, updatePassword] = useInput('');
  const [displayName, updateDisplayName] = useInput('');
  const [email, updateEmail] = useInput('');

  const updateProfile = async () => {
    const authenticated = await user.reauthenticateWithCredential({ email: user.email, password });
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

export default ProfileBlock;
