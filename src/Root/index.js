import React from 'react';
import ReactDOM from 'react-dom';

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
