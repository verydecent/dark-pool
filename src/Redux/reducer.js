import { TOGGLE_ACCOUNT_MODAL } from './constants';

const toggleAccountModal = state => {
  return {
    isAccountModalOpen: !state.isAccountModalOpen
  }
}

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_ACCOUNT_MODAL: {
      return toggleAccountModal(state);
    }
    default: return state
  }
}

export default reducer;