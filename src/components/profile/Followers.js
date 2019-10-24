/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Followers = ({ followers }) => (
  <>
    <div className="panel-block">
      <p className="control has-icons-left">
        <input className="input" type="text" placeholder="Search" />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
    {followers.map((follower, index) => (
      <a className="panel-block" key={index}>
        <span className="panel-icon">
          <i className="fas fa-user is-small" aria-hidden="true" />
        </span>
        {follower.displayName}
      </a>
    ))}
  </>
);

export default Followers;
