const initialState = {
    // Initial state for the about section
    data: null,
  };
  
  // Action types
  const SET_ABOUT_DATA = 'SET_ABOUT_DATA';
  
  // Action creators
  export const setAboutData = (data) => {
    return {
      type: SET_ABOUT_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ABOUT_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default aboutReducer;