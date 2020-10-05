import {
  TOGGLE_ACCOUNT_MODAL,
  TOGGLE_CALENDAR_MODAL,
  RESET_TO_CURRENT_DATE,
  TOGGLE_MONTH_LIST,
  CHANGE_MONTH,
  TOGGLE_YEAR_LIST,
  CHANGE_YEAR,
  PREV_MONTH,
  NEXT_MONTH,
  SELECT_DATE,
  PREV_DATE,
  NEXT_DATE
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

const resetToCurrentDate = state => {
  const dateContext = moment();
  return {
    ...state,
    dateContext: dateContext
  }
}

const toggleMonthList = state => {
  return {
    ...state,
    isMonthListOpen: !state.isMonthListOpen
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

const toggleYearList = state => {
  return {
    ...state,
    isYearListOpen: !state.isYearListOpen
  }
}

const changeYear = (state, year) => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).set('year', year);
  return {
    ...state,
    dateContext
  }
}

const prevMonth = state => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).subtract(1, 'month');
  return {
    ...state,
    dateContext
  }
}

const nextMonth = state => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).add(1, 'month');
  return {
    ...state,
    dateContext
  }
}

const selectDate = (state, date) => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).set('date', date);
  return {
    ...state,
    dateContext
  }
}

const prevDate = state => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).subtract(1, 'days');
  return {
    ...state,
    dateContext
  }
}

const nextDate = state => {
  let dateContext = Object.assign({}, state.dateContext);
  dateContext = moment(dateContext).add(1, 'days');
  return {
    ...state,
    dateContext
  }
}

function reducer(state, action) {
  switch (action.type) {
    // Account Modal
    case TOGGLE_ACCOUNT_MODAL: {
      return toggleAccountModal(state);
    }
    // Calendar Modal
    case TOGGLE_CALENDAR_MODAL: {
      return toggleCalendarModal(state);
    }
    case RESET_TO_CURRENT_DATE: {
      return resetToCurrentDate(state);
    }
    case TOGGLE_MONTH_LIST: {
      return toggleMonthList(state);
    }
    case CHANGE_MONTH: {
      return changeMonth(state, action.payload);
    }
    case TOGGLE_YEAR_LIST: {
      return toggleYearList(state);
    }
    case CHANGE_YEAR: {
      return changeYear(state, action.payload);
    }
    case PREV_MONTH: {
      return prevMonth(state);
    }
    case NEXT_MONTH: {
      return nextMonth(state);
    }
    case SELECT_DATE: {
      return selectDate(state, action.payload);
    }

    // Task View
    case PREV_DATE: {
      return prevDate(state);
    }
    case NEXT_DATE: {
      return nextDate(state);
    }
    default: return state
  }
}

export default reducer;