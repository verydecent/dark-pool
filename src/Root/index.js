import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import './global.css';
import './font.css';
import './reset.css';

const Root = () => {
  return (
    <BrowserRouter>
      Root Component Here
      <Link to='/something'>Link here</Link>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
