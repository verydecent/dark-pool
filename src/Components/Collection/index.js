import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import CollectionBox from '../CollectionBox';

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCollectionBox: null,
      isModalOpen: false,
    };
  }

  render() {
    return (
      <div className='collection'>
        <div className='collection-container'>
          <div className='collection-header-container'>
            <h2 className='collection-title'>Collection</h2>
            <button>Create Collection</button>
          </div>
         
          <div className='collection-box-container'>
            <div className='collection-box-container-header'>
              <h2 className='date-header'>Wed July 8 2020</h2>
              <div className='collection-carousel-buttons'>
                <button>Left</button>
                <button>right</button>
              </div>
            </div>
            <div className='collection-list-container'>
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
              <CollectionBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSideNav(Collection);
