import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  CHANGE_MONTH,
  TOGGLE_MONTH_LIST,
  TOGGLE_YEAR_LIST,
} from './constants';

export const toggleAccountModal = () => ({
  type: TOGGLE_ACCOUNT_MODAL
});

export const toggleCalendarModal = () => ({
  type: TOGGLE_CALENDAR_MODAL
});

export const setToCurrentDate = () => ({
  type: SET_TO_CURRENT_DATE
});

export const changeMonth = () => ({
  type: CHANGE_MONTH
});

export const toggleMonthList = () => ({
  type: TOGGLE_MONTH_LIST
});

export const toggleYearList = () => ({
  type: TOGGLE_YEAR_LIST
});

// export {
//   toggleAccountModal,
//   toggleCalendarModal,
//   setToCurrentDate,
//   changeMonth,
//   toggleMonthList,
//   toggleYearList
// }