import * as React from 'react';
import { ArticleListInterface } from 'interface';
import Article from './Article';

const ArticleList: React.FC<ArticleListInterface> = ({ articles }) => {
  return (
    <>
      {articles.slice(0, 3).map(article => (
        <Article
          key={article.url}
          image={article.urlToImage}
          url={article.url}
          title={article.title}
          author={article.author}
          description={article.description}
          publishedAt={article.publishedAt}
        />
      ))}
    </>
  );
};
export default ArticleList;
