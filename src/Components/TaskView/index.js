import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCollectionBox: null,
      isModalOpen: false,
    };

    this.selectCollectionBox = this.selectCollectionBox.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  selectCollectionBox() {
  }

  toggleModal() {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  }

  render() {
    return (
      <div className='collection'>
        <div className='collection-container'>
          <div className='collection-header-container'>
            <h2 className='collection-title'>Your Tasks</h2>
            <button>Create Collection</button>
          </div>
         
          <div className='collection-body-container'>
            <div className='collection-body-container-header'>
              <h2 className='date-header'>Wed July 8 2020</h2>
              <div className='collection-carousel-buttons'>
                <button>Left</button>
                <button>right</button>
              </div>
            </div>

            <TaskModal
              isModalOpen={this.state.isModalOpen}
              toggleModal={this.toggleModal}
            />
            <div className='collection-list-container'>
              <Task toggleModal={this.toggleModal}/>
              <Task />
              <Task />
              <Task />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSideNav(Collection);
