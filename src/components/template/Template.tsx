import * as React from 'react';
import firebase from 'firebase';
import Header from './Header';
import Foot from './Foot';
import { NotificationProvider } from '../contexts/NotificationContext';
import { ArticleProvider } from '../contexts/ArticleContext';
import { FeedProvider } from '../contexts/FeedContext';

const Template: React.FC<{
  children: React.ReactNode;
  user: firebase.User | null;
}> = ({ children, user }) => (
  <>
    <NotificationProvider>
      <Header user={user!} />
      <div
        style={{
          padding: '100px',
          marginBottom: '60px',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column'
        }}
      >
        <ArticleProvider>
          <FeedProvider>{children}</FeedProvider>
        </ArticleProvider>
      </div>
      <Foot />
    </NotificationProvider>
  </>
);

export default Template;
