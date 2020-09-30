import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE
} from './constants';

const toggleAccountModal = () => ({
  type: TOGGLE_ACCOUNT_MODAL
});

const toggleCalendarModal = () => ({
  type: TOGGLE_CALENDAR_MODAL
});

const setToCurrentDate = () => ({
  type: SET_TO_CURRENT_DATE
})

export {
  toggleAccountModal,
  toggleCalendarModal,
  setToCurrentDate
}