import { Post } from 'interface';

interface Action {
  type: string;
  id?: string;
  feed: Post[];
}
const reducer = (state: Post[], action: Action): Post[] => {
  switch (action.type) {
    case 'SET':
      return action.feed;

    case 'REMOVE':
      return state.filter(f => f.id !== action.id);

    case 'ADD':
      return [...action.feed, ...state];

    default:
      return state;
  }
};

export default reducer;
