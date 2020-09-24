import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = { isAccountModalOpen: false }

const store = createStore(reducer, initialState);

export default store;