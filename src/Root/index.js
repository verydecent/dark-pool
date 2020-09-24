import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './reset.css';
import Routes from '../Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
  faPlus,
  faAngleLeft,
  faAngleRight,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';
import {
  faChartBar,
  faCalendarAlt,
  faUser,
  faHandPeace,
} from '@fortawesome/free-regular-svg-icons';
import { Provider } from 'react-redux';
import store from '../Redux/store';

library.add(
  // Solid Icons
  faTimes,
  faPlus,
  faAngleLeft,
  faAngleRight,
  faListUl,

  // Regular Icons
  faChartBar,
  faCalendarAlt,
  faUser,
  faHandPeace
);

const Root = () =>
  <div className='root'>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
