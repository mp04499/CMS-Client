import uuid from 'uuid/v4';
import { NotificationInterface } from 'interface';

interface Action {
  type: string;
  text: string;
  id: string;
}
const reducer = (
  state: (NotificationInterface | { id: string; text: string })[],
  action: Action
): (NotificationInterface | { id: string; text: string })[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), text: action.text }];

    case 'REMOVE':
      return state.filter(n => n.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
