/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, memo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Feed from './Feed';
import { FeedContext, DispatchContext } from '../contexts/FeedContext';
import { listener } from '../../utils/Posts';
import '../../css/Feed.css';

const FeedList = ({ user }) => {
  const feed = useContext(FeedContext) || [];
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    let snapShot;

    const listen = async () => {
      if (!user || feed.length < 1) return;
      const query = await listener(user.uid);
      snapShot = query.onSnapshot(async (doc) => {
        const updatedFeed = [];
        doc.forEach((post) => updatedFeed.push({ ...post.data(), id: post.id }));

        const newPosts = updatedFeed.filter((post) => {
          for (const p in feed) {
            if (feed[p].id === post.id) return false;
          }

          return true;
        });

        if (newPosts.length > 0 && newPosts !== feed) dispatch({ type: 'ADD', posts: newPosts });
      });
    };

    listen();

    return () => {
      if (snapShot) snapShot();
    };
  }, [user, feed]);

  return (
    <TransitionGroup className="Feed">
      {feed.map((post) => (
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="Feed"
          mountOnEnter
        >
          <Feed
            key={post.id}
            name={user.displayName}
            at={user.displayName}
            text={post.message}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default memo(FeedList);
