import React, { useContext } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import Article from './Article';

const ArticleList = () => {
  const { articles } = useContext(ArticleContext);

  return articles
    .slice(0, 3)
    .map((article) => (
      <Article
        key={article.url}
        image={article.urlToImage}
        url={article.url}
        title={article.title}
        author={article.author}
        description={article.description}
        publishedAt={article.publishedAt}
      />
    ));
};
export default ArticleList;
