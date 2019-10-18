import React from 'react';
import '../css/Me.css';
import ArticleTile from "../components/articles/ArticleTile";
import FeedTile from "../components/feeds/FeedTile";
import NotificationTile from "../components/notifications/NotificationTile";

const Me = () => {

  return (
    <div className={"container"}>
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <NotificationTile/>
          <ArticleTile/>
        </div>
        <FeedTile/>
      </div>
    </div>
  )
};

export default Me;
