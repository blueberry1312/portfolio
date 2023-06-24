const initialState = {
    // Initial state for the services section
    data: null,
  };
  
  // Action types
  const SET_SERVICES_DATA = 'SET_SERVICES_DATA';
  
  // Action creators
  export const setServicesData = (data) => {
    return {
      type: SET_SERVICES_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SERVICES_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default servicesReducer;