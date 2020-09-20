import React from 'react';
import './styles.css';

const Button = ({
  children,
  onClick
}) => {
  if (onClick) {
    return (
      <button className='button' onClick={() => onClick()}>
        {children}
      </button>
    )
  }
  else {
    return (
      <button className='button'>
        {children}
      </button>
    );
  }
}

export default Button;