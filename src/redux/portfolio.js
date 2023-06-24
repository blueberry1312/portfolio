const initialState = {
    // Initial state for the portfolio section
    data: null,
  };
  
  // Action types
  const SET_PORTFOLIO_DATA = 'SET_PORTFOLIO_DATA';
  
  // Action creators
  export const setPortfolioData = (data) => {
    return {
      type: SET_PORTFOLIO_DATA,
      payload: data,
    };
  };
  
  // Reducer
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PORTFOLIO_DATA:
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;