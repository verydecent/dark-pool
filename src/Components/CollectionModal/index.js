import React from 'react';

const CollectionModal = ({
  title,
  todos,
}) => {
  return (
    <div className='collection-modal'>
      COLLECTION MODAL COMPONENT

      TITLE : ~> {title}
      TODOS: ~> {todos}
    </div>
  );
}

export default CollectionModal;
