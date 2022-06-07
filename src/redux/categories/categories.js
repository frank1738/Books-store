// REDUCER
const reducer = (state = '', action) => {
  switch (action.type) {
    case 'checkStatus':
      return state.concat('Under Construction');
    default:
      return state;
  }
};

// ACTIONS
export const checkStatus = () => {
  return {
    type: 'checkStatus',
  };
};

export default reducer;
