import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import './reset.css';
import Routes from '../Routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { twitter } from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faTimesCircle);

const Root = () => {
  return (
		<div className='root-container'>
			<div className='root-container-inner'>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</div>
		</div>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
