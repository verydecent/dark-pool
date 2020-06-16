import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import './font.css';
import './reset.css';
import Routes from '../Routes';

const Root = () => {
  return (
		<div className='root-container'>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
