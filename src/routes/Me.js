import React from 'react';
import '../css/Me.css';
import ArticleTile from '../components/articles/ArticleTile';
import FeedTile from '../components/feeds/FeedTile';
import NotificationTile from '../components/notifications/NotificationTile';

const Me = ({ user }) => (
  <>
    <div className="tile is-ancestor">
      <div className="tile is-5 is-vertical is-parent">
        <NotificationTile />
        <ArticleTile />
      </div>
      <div className="tile is-flex is-parent">
        <FeedTile user={user} />
      </div>
    </div>
  </>
);

export default Me;
