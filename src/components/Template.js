import Header from './Header';
import Foot from './Foot';
import { NotificationProvider } from './contexts/NotificationContext';
import { ArticleProvider } from './contexts/ArticleContext';
import { FeedProvider } from './contexts/FeedContext';
import React from 'react';

const Template = ({ children, user, loading }) => {
  return (
    <NotificationProvider>
      <Header user={user} />
      <div
        style={{
          padding: '100px',
          marginBottom: '60px',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <ArticleProvider>
          <FeedProvider>{children}</FeedProvider>
        </ArticleProvider>
      </div>
      <Foot />
    </NotificationProvider>
  );
};

export default Template;
