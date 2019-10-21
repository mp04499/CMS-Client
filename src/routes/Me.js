import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Me.css';
import ArticleTile from '../components/articles/ArticleTile';
import FeedTile from '../components/feeds/FeedTile';
import NotificationTile from '../components/notifications/NotificationTile';
import { UserContext } from '../components/contexts/UserContext';

const Me = () => {
  const { user } = useContext(UserContext);

  if (!user) return <Redirect to="/" />;

  return (
    <div className="tile is-ancestor">
      <div className="tile is-5 is-vertical is-parent">
        <NotificationTile />
        <ArticleTile />
      </div>
      <div className="tile is-flex is-parent">
        <FeedTile />
      </div>
    </div>
  );
};

export default Me;
