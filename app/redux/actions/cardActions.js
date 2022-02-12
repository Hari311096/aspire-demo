const types = {
  SET_CARD_LIMIT: 'SET_CARD_LIMIT',
};

// Initialize Redux methods
export function setCardLimit(cardLimit) {
  return {
    type: types.SET_CARD_LIMIT,
    cardLimit,
  };
}
