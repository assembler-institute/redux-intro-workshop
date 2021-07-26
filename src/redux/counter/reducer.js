const reducer =  (state = 0, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER': 
      return state + action.payload;

    case 'DECREASE_COUNTER':
      return state - action.payload;
    
    case 'RESET_COUNTER':
      return 0;

    default: 
      return state;
  }
}

export default reducer;
