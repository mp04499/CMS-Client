const reducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.feed;

    case 'REMOVE':
      return state.filter((f) => f.id !== action.id);

    case 'ADD':
      return [...action.posts, ...state];

    default:
      return state;
  }
};

export default reducer;
