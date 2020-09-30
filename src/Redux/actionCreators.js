import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  TOGGLE_MONTH_LIST,
  TOGGLE_YEAR_LIST,
  CHANGE_MONTH,
} from './constants';

const toggleAccountModal = () => ({
  type: TOGGLE_ACCOUNT_MODAL
});

const toggleCalendarModal = () => ({
  type: TOGGLE_CALENDAR_MODAL
});

const setToCurrentDate = () => ({
  type: SET_TO_CURRENT_DATE
});

const changeMonth = month => ({
  type: CHANGE_MONTH,
  payload: month
});

const toggleMonthList = () => ({
  type: TOGGLE_MONTH_LIST
});

const toggleYearList = () => ({
  type: TOGGLE_YEAR_LIST
});

export {
  toggleAccountModal,
  toggleCalendarModal,
  setToCurrentDate,
  changeMonth,
  toggleMonthList,
  toggleYearList
}