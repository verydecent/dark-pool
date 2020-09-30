import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  SET_TO_CURRENT_DATE,
  TOGGLE_MONTH_LIST,
  TOGGLE_YEAR_LIST,
  CHANGE_MONTH,
} from './constants';
import moment from 'moment';

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

const setToCurrentDate = state => {
  const newDateContext = moment();
  return {
    ...state,
    dateContext: newDateContext
  }
}

const toggleMonthList = state => {
  return {
    ...state,
    isMonthListOpen: !state.isMonthListOpen
  }
}

const toggleYearList = state => {
  return {
    ...state,
    isYearListOpen: !state.isYearListOpen
  }
}

const changeMonth = (state, month) => {
  const monthNumber = moment.months().indexOf(month);
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).set('month', monthNumber);
  return {
    ...state,
    dateContext,
    isMonthListOpen: false
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
      return changeMonth(state, action.payload);
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