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
  faCalendarAlt,
  faClipboard,
  faUser,
  faChartLine,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faTimes,
  faPlus,
  faAngleLeft,
  faAngleRight,
  faCalendarAlt,
  faClipboard,
  faUser,
  faChartLine,
  faSignOutAlt
);

const Root = () => {
  return (
    <div className='root-container'>
      <Routes />
    </div>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
