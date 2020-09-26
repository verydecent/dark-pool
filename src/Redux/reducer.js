import { TOGGLE_ACCOUNT_MODAL, TOGGLE_CALENDAR_MODAL } from './constants';

const toggleAccountModal = state => {
  return {
    ...state,
    isAccountModalOpen: !state.isAccountModalOpen
  }
}

const toggleCalendarModal = state => {
  return {
    ...state,
    isCalendarModalOpen: !state.isCalendarModalOpen
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
    default: return state
  }
}

export default reducer;