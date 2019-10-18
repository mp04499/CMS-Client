/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';

const Feed = ({ name, at, text }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name} </strong>
              <small>{at}</small>
              <br />
              {text}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true" />
                </span>
              </a>
              <a className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true" />
                </span>
              </a>
              <a className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default memo(Feed);
