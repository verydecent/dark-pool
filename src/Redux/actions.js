import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  CHANGE_MONTH,
  TOGGLE_MONTH_LIST,
  TOGGLE_YEAR_LIST,
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

const changeMonth = () => ({
  type: CHANGE_MONTH
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