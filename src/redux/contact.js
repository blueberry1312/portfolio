const initialState = {
    // Initial state for the contact section
    data: null,
  };
  
  // Action types
  const SET_CONTACT_DATA = 'SET_CONTACT_DATA';
  
  // Action creators
  export const setContactData = (data) => {
    return {
      type: SET_CONTACT_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CONTACT_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;