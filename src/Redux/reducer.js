import moment from 'moment';
import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  CHANGE_MONTH,
  TOGGLE_MONTH_LIST,
  TOGGLE_YEAR_LIST
} from './constants';

const toggleAccountModal = state => {
  return {
    isAccountModalOpen: !state.isAccountModalOpen
  }
}

const toggleCalendarModal = state => {
  return {
    isCalendarModalOpen: !state.isCalendarModalOpen
  }
}

const setToCurrentDate = state => {
  const newDateContext = moment();
  return {
    dateContext: newDateContext
  }
}

const toggleMonthList = state => {
  return {
    isMonthListOpen: !state.isMonthListOpen
  }
}

const toggleYearList = state => {
  return {
    isYearListOpen: !state.isYearListOpen
  }
}

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_ACCOUNT_MODAL: {
      return toggleAccountModal(state);
    }
    case TOGGLE_CALENDAR_MODAL: {
      return toggleCalendarModal(state);
    }
    case SET_TO_CURRENT_DATE: {
      return setToCurrentDate(state);
    }
    case CHANGE_MONTH: {
      return changeMonth(state);
    }
    case TOGGLE_MONTH_LIST: {
      return toggleMonthList(state);
    }
    case TOGGLE_YEAR_LIST: {
      return toggleYearList(state);
    }
    default: return state
  }
}

export default reducer;