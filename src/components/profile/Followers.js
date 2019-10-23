/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const Followers = ({ followers }) => {
  const [followersList, setFollowersList] = useState([]);

  useEffect(() => {
    const getFollowersList = async () => {
      let list = [];
      followers.forEach(async followerReference => {
        const followerQuery = await followerReference.get();
        const follower = await followerQuery.data();
        list = [...list, follower];
        setFollowersList(list);
      });
    };

    getFollowersList();
  }, [followers]);

  return (
    <>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      {followersList.map((follower, index) => (
        <a className="panel-block" key={index}>
          <span className="panel-icon">
            <i className="fas fa-user is-small" aria-hidden="true"></i>
          </span>
          {follower.displayName}
        </a>
      ))}
    </>
  );
};

export default Followers;
