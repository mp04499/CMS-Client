import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), text: action.text }];

    case 'REMOVE':
      return state.filter((n) => n.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
