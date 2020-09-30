import { createStore } from 'redux';
import reducer from './reducer';
import moment from 'moment';

const initialState = {
  isAccountModalOpen: false,
  isCalendarModalOpen: false,
  dateContext: moment()
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;