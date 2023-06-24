import { createStore, combineReducers } from 'redux';
import homeReducer from './redux/home';
import aboutReducer from './redux/about';
import resumeReducer from './redux/resume';
import servicesReducer from './redux/services';
import portfolioReducer from './redux/portfolio';
import contactReducer from './redux/contact';

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer,
  resume: resumeReducer,
  services: servicesReducer,
  portfolio: portfolioReducer,
  contact: contactReducer,
});

const store = createStore(rootReducer);

export default store;