/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import ArticleList from './ArticleList';
import '../../css/Article.css';

const ArticleTile: React.FC<{}> = () => {
  const { useContext } = React;
  const { articles, showNews, setShowNews } = useContext(ArticleContext);

  const loadNews = (): void => {
    setShowNews(false);
  };

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
                onClick={loadNews}
                onKeyDown={loadNews}
                type="button"
                style={{ outline: 'none' }}
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
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default ArticleTile;
