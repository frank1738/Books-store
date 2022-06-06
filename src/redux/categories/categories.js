// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'checkStatus':
      return 'Under construction';
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
