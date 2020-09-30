import { createStore } from 'redux';
import reducer from './reducer';
import moment from 'moment';

const initialState = {
  // Account Modal
  isAccountModalOpen: false,
  // Calendar Modal
  isCalendarModalOpen: false,
  dateContext: moment(),
  isMonthListOpen: false,
  isYearListOpen: false,
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;