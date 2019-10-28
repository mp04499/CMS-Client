/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import ArticleList from './ArticleList';
import '../../css/Article.css';

const ArticleTile = () => {
  const { showNews, setShowNews } = useContext(ArticleContext);

  return (
    <div className="tile is-child is-vertical box Article">
      <div className="title">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">News</div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button
                className={
                  showNews
                    ? 'button is-primary is-outlined'
                    : 'button is-primary is-outlined is-loading'
                }
                onClick={() => setShowNews(!showNews)}
                onKeyDown={() => setShowNews(!showNews)}
                type="button"
              >
                Refresh News
              </button>
            </div>
          </div>
        </nav>
      </div>
      {showNews === false ? (
        <progress className="progress is-primary" max="100">
          15%
        </progress>
      ) : (
        <ArticleList />
      )}
    </div>
  );
};

export default ArticleTile;
