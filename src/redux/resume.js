const initialState = {
    // Initial state for the resume section
    data: null,
  };
  
  // Action types
  const SET_RESUME_DATA = 'SET_RESUME_DATA';
  
  // Action creators
  export const setResumeData = (data) => {
    return {
      type: SET_RESUME_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_RESUME_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default resumeReducer;