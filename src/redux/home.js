const initialState = {
    // Initial state for the home section
    data: null,
  };
  
  // Action types
  const SET_HOME_DATA = 'SET_HOME_DATA';
  
  // Action creators
  export const setHomeData = (data) => {
    return {
      type: SET_HOME_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_HOME_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default homeReducer;