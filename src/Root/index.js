import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import './font.css';
import './reset.css';
import Routes from '../Routes';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf';

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
