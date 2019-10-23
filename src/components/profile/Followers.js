/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Followers = () => {
  return (
    <>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-info is-small" aria-hidden="true"></i>
        </span>
        User Here
      </a>
    </>
  );
};

export default Followers;
