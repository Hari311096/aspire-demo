/* Card Reducer
 * handles states in the app
 */
const types = {
  SET_CARD_LIMIT: 'SET_CARD_LIMIT',
}

// Default values
const initialState = {
  cardLimit: null,
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CARD_LIMIT:
      return {
        ...state,
        cardLimit: action.cardLimit
      };
    default:
      return state;
  }
}