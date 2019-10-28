import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Foot from './Foot';
import { NotificationProvider } from './contexts/NotificationContext';
import { ArticleProvider } from './contexts/ArticleContext';
import { FeedProvider } from './contexts/FeedContext';

const Template = ({ children, user }) => (
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

export default Template;

Template.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};
