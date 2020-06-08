import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import './font.css';
import './reset.css';

const Root = () => {
  return (
    <>
      Root Component Here
    </>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);

module.hot.accept();
