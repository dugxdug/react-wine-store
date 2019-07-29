const INITIAL_STATE = {
  wines: [],
  vintage: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_WINES_SUCCESS':
    return Object.assign({}, state, {
      wines: action.payload.wines,
      vintage: action.payload.vintage
    });
  default:
    return state;
  }
};

export default reducer;
