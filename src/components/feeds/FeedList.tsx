import * as React from 'react';
import { FeedListInterface, Post } from 'interface';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Feed from './Feed';
import { FeedContext, DispatchContext } from '../contexts/FeedContext';
import { listener } from '../../utils/Posts';
import '../../css/Feed.css';

const { useContext, useEffect, memo } = React;

const FeedList: React.FC<FeedListInterface> = ({ user, feed }) => {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    let snapShot: () => void | null;

    const listen = async (): Promise<void> => {
      if (!user || feed.length < 1) return;
      const query = await listener(user.uid);
      snapShot = query.onSnapshot(async doc => {
        const updatedFeed: Post[] = [];
        doc.forEach(post => updatedFeed.push({ ...post.data(), id: post.id }));

        const newPosts = updatedFeed.filter(post =>
          feed.every(p => p.id !== post.id)
        );

        if (newPosts.length > 0 && newPosts !== feed)
          dispatch({ type: 'ADD', posts: newPosts });
      });
    };

    listen();

    return (): void => {
      if (snapShot) snapShot();
    };
  }, [user, feed]);

  return (
    <TransitionGroup className="Feed">
      {feed.map(post => (
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="Feed"
          mountOnEnter
        >
          <Feed
            key={post.id}
            name={user.displayName!}
            at={user.displayName!}
            text={post.message}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default memo(FeedList);
