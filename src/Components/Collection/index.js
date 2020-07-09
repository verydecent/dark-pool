import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {

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
            BOX BOX BOX BOX
          </div>
        </div>
      </div>
    );
  }
}

export default withSideNav(Collection);
