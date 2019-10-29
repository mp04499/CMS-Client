import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [showNews, setShowNews] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef');
      setArticles(response.data.articles);

      if (articles.length > 0) { setShowNews(true); }
    };

    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [articles]);

  return (
    <ArticleContext.Provider value={{
      showNews, setShowNews, articles, setArticles,
    }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

ArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
