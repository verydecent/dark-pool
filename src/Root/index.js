import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './reset.css';
import Routes from '../Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(
  faTimes,
  faPlus,
  faAngleLeft,
  faAngleRight
);

const Root = () => {
  return (
		<div className='root-container'>
			<div className='root-container-inner'>
        <Routes />
			</div>
		</div>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
