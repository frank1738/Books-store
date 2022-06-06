// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case 'checkStatus':
      return 'Under construction';
  }
};

// ACTIONS
export const checkStatus = () => {
  return {
    type: 'checkStatus',
  };
};

export default reducer;
