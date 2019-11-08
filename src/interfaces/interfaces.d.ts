declare module 'interface' {
  import * as React from 'react';
  import firebase from 'firebase';

  interface FeedTileInterface {
    user: firebase.User | null;
    feed: Post[];
  }
  interface FeedListInterface {
    user: firebase.User;
    feed: Post[];
  }
  interface History {
    push: (location: string) => void;
    [x: string]: any;
  }
  interface HomeInterface {
    history: History;
  }
  interface MeInterface {
    user: firebase.User | null;
  }
  interface ProfileInterface {
    user: firebase.User | null;
    history?: History;
    title?: string | null;
  }
  interface EditableInterface {
    innerHtml: string;
    contentRef: Function | RefObject<HTMLElement> | undefined;
    disabled: boolean;
    onChange: (e: React.SyntheticEvent) => void;
    tagName: string;
    className?: string;
    onEnter?: ((e: React.KeyboardEvent) => void) | null | undefined;
  }
  interface ReviewInterface {
    contentRef: React.RefObject<string>;
  }
  interface SignUpInterface {
    history: History;
  }
  interface ProfileBlockInterface {
    user: firebase.User | null;
    history: History;
  }
  interface FollowersInterface {
    followers: Follower[];
  }
  interface Follower {
    displayName: string;
    uid: string;
  }
  interface DispatchInterface {
    dispatch: React.Dispatch<any>;
  }
  interface UserProviderInterface {
    user: firebase.User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    loading: boolean;
  }
  interface Post {
    id: string;
    message?: string;
    timestamp?: Date = new Date();
    [key: string]: Post | string | null;
  }
  interface Feed {
    [key: string]: Post[] | string;
    id?: string;
  }
  interface FeedInterface {
    name: string;
    at: string;
    text?: string;
  }
  interface ArticleContextInterface {
    showNews: boolean;
    setShowNews: (boolean) => void;
    articles: Article[];
    setArticles: Dispatch<SetStateAction<never[]>>;
  }
  interface NotificationInterface {
    id: string;
    text?: string;
    dispatch: React.Dispatch<any>;
  }
  interface Notification {
    id: string;
    text?: string;
  }
  interface NotificationListInterface {
    notifications: Notification[];
    dispatch: React.Dispatch<any>;
  }
  interface Article {
    url: string;
    urlToImage: string;
    title: string;
    author: string;
    description: string;
    publishedAt: string;
  }
  interface ArticleInterface {
    image: string;
    title: string;
    author: string;
    description: string;
    url: string;
    publishedAt: string;
  }
  interface ArticleListInterface {
    articles: Article[];
  }
  interface HeaderState {
    followers: number;
    setFollowers: React.SetStateAction<number>;
    following: number;
    setFollowing: React.SetStateAction<number>;
  }
  interface Constants {
    API: {
      USER: {
        FOLLOWERS: string;
        FOLLOWING: string;
        COMPLETE: string;
        UPDATE: string;
      };
      REVIEW: {
        CREATE: string;
      };
    };
  }
}
