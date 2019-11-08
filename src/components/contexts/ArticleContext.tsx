import * as React from 'react';
import { ArticleContextInterface } from 'interface';
import axios from 'axios';

const { createContext, useEffect, useState } = React;
export const ArticleContext = createContext({} as ArticleContextInterface);

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [showNews, setShowNews] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef'
      );
      setArticles(response.data.articles);

      if (articles.length > 0) {
        setShowNews(true);
      }
    };

    if (!showNews) {
      fetchData();
    }
  }, [articles, showNews]);

  return (
    <ArticleContext.Provider
      value={{
        showNews,
        setShowNews,
        articles,
        setArticles
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
