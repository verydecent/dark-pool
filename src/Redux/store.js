import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import moment from 'moment';
import logger from 'redux-logger';

const initialState = {
  // Account Modal
  isAccountModalOpen: false,
  // Calendar Modal
  isCalendarModalOpen: false,
  dateContext: moment(),
  isMonthListOpen: false,
  isYearListOpen: false,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(logger)
  )
);

export default store;