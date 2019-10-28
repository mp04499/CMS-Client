import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Feed = ({ name, at, text }) => (
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
            <strong>
              {name}
              {' '}
            </strong>
            <small>{at}</small>
            <br />
            {text}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply" href="/me">
              <span className="icon is-small">
                <i className="fas fa-reply" aria-hidden="true" />
              </span>
            </a>
            <a className="level-item" aria-label="retweet" href="/me">
              <span className="icon is-small">
                <i className="fas fa-retweet" aria-hidden="true" href="/me" />
              </span>
            </a>
            <a className="level-item" aria-label="like" href="/me">
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

export default memo(Feed);

Feed.propTypes = {
  name: PropTypes.string.isRequired,
  at: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
