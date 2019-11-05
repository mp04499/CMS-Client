import * as React from 'react';
import '../css/Me.css';
import { MeInterface } from 'interface';
import ArticleTile from '../components/articles/ArticleTile';
import FeedTile from '../components/feeds/FeedTile';
import NotificationTile from '../components/notifications/NotificationTile';
import { FeedContext } from '../components/contexts/FeedContext';

const Me: React.FC<MeInterface> = ({ user }) => {
  const { useContext } = React;
  const feed = useContext(FeedContext) || [];
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-5 is-vertical is-parent">
          <NotificationTile />
          <ArticleTile />
        </div>
        <div className="tile is-flex is-parent">
          <FeedTile feed={feed} user={user} />
        </div>
      </div>
    </>
  );
};

export default Me;
