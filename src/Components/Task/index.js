import React from 'react';
import './styles.css';

const CollectionBox = ({
  toggleModal
}) => {
  return (
    <div className='collection-box' onClick={() => toggleModal()}>
      <div className='collection-box-container'>
        Collection Box
      </div>
    </div>
  );
}

export default CollectionBox;
