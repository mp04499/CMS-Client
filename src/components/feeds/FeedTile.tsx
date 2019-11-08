import * as React from 'react';
import { FeedTileInterface } from 'interface';
import FeedList from './FeedList';
import useInput from '../hooks/useInput';
import { createPost } from '../../utils/Posts';
import '../../css/Feed.css';

const { useState, memo } = React;

const FeedTile: React.FC<FeedTileInterface> = ({ user, feed }) => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState('');
  const [message, updateMessage, reset]: [
    string,
    (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    () => void
  ] = useInput('');

  const handleClick = (): void => {
    setActive(!active);
  };

  const clearError = (): void => {
    setError('');
  };

  const post = (): void => {
    if (message) {
      if (message.trim().length > 0) {
        if (user) {
          createPost(user.uid, message);
          setActive(!active);
          reset();
          clearError();
        }
      }
    } else {
      setError('Your message is empty!');
    }
  };

  return (
    <>
      <div className="tile is-parent Feed-Tile is-flex">
        <div className="tile is-child box">
          <div className="title">
            <nav role="navigation" className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title"> My Feed </h1>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <button
                    onClick={handleClick}
                    className="button is-rounded is-primary"
                    type="button"
                  >
                    <span className="icon is-small">
                      <i className="fas fa-plus" style={{ color: '#fff' }} />
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <FeedList feed={feed} user={user!} />
        </div>
      </div>
      <div className={active ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-content">
          {error.length > 0 ? (
            <article className="message is-small is-danger">
              <div className="message-header">
                <p>Empty Post!</p>
                <button
                  onClick={clearError}
                  className="delete is-small"
                  aria-label="delete"
                  type="button"
                />
              </div>
              <div className="message-body">{error}</div>
            </article>
          ) : (
            ''
          )}
          <div className="card">
            <div className="card-header">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <h4 className="title is-4">Post Message</h4>
                </div>
              </nav>
            </div>
            <div className="card-content">
              <div className="content">
                <textarea
                  value={message}
                  onChange={updateMessage}
                  className="textarea has-fixed-size"
                  placeholder="Type Here"
                />
              </div>
            </div>
            <footer className="card-footer has-text-centered">
              <div className="content">
                <button
                  className="button is-primary"
                  style={{
                    color: '#fff',
                    marginLeft: '30px',
                    marginTop: '10px',
                    marginBottom: '10px'
                  }}
                  onClick={post}
                  type="button"
                >
                  Post
                </button>
              </div>
            </footer>
          </div>
          <button
            onClick={handleClick}
            className="modal-close is-large"
            aria-label="close"
            type="button"
          />
        </div>
      </div>
    </>
  );
};

export default memo(FeedTile);
