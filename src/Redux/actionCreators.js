import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  TOGGLE_MONTH_LIST,
  CHANGE_MONTH,
  TOGGLE_YEAR_LIST,,
  CHANGE_YEAR
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

const toggleMonthList = () => ({
  type: TOGGLE_MONTH_LIST
});

const changeMonth = month => ({
  type: CHANGE_MONTH,
  payload: month
});

const toggleYearList = () => ({
  type: TOGGLE_YEAR_LIST
});

const changeYear = e => ({
  type: CHANGE_YEAR,
  payload: e.target.value
})

export {
  toggleAccountModal,
  toggleCalendarModal,
  setToCurrentDate,
  toggleMonthList,
  changeMonth,
  toggleYearList,
  changeYear
}