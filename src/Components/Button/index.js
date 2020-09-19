import React from 'react';
import './styles.css';

const Button = ({
  children
}) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
}

export default Button;