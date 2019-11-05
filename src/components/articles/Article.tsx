import React, { memo } from 'react';
import { ArticleInterface } from 'interface';

const Article: React.FC<ArticleInterface> = ({
  image,
  title,
  author,
  description,
  url,
  publishedAt
}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt="Placeholder" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{title}</strong>
            <br />
            <small>
              Author:
              {author}
            </small>
            <br />
            {description}
          </p>
        </div>
        <a href={url}>{publishedAt}</a>
      </div>
    </article>
  </div>
);

export default memo(Article);
