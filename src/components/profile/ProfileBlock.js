/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ProfileBlock = () => {
  return (
    <>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-unlock" aria-hidden="true"></i>
        </span>
        <input
          className="input"
          type="password"
          placeholder="Current Password"
        ></input>
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-lock" aria-hidden="true"></i>
        </span>
        <input
          className="input"
          type="password"
          placeholder="New Password"
        ></input>
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-user" aria-hidden="true"></i>
        </span>
        <input
          className="input"
          type="text"
          placeholder="Change Display Name"
        ></input>
      </a>
      <a className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-envelope" aria-hidden="true"></i>
        </span>
        <input className="input" type="text" placeholder="Change Email"></input>
      </a>
      <button
        className="button is-success is-light"
        style={{ marginLeft: '5px', marginTop: '5px', marginBottom: '5px' }}
      >
        <span className="icon is-small">
          <i className="fas fa-check"></i>
        </span>
        <span>Save</span>
      </button>
    </>
  );
};

export default ProfileBlock;
