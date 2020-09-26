import { TOGGLE_ACCOUNT_MODAL, TOGGLE_CALENDAR_MODAL } from './constants';

const toggleAccountModal = () => ({
  type: TOGGLE_ACCOUNT_MODAL
});

const toggleCalendarModal = () => ({
  type: TOGGLE_CALENDAR_MODAL
});

export {
  toggleAccountModal,
  toggleCalendarModal
}