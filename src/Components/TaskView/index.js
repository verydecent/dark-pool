import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';
import { Plus } from '../FAIcons';

class TaskView extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenTaskForModalView: null,
      isModalOpen: false,
      
      taskTitle: '',
      taskDescription: '',
      tasks: [],
    };

    this.openModalToAddTask = this.openModalToAddTask.bind(this);
    this.addSubtask= this.addSubtask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openModalToAddTask() {
    console.log('openModalToAddTask()');
    this.toggleModal();
  }

  addSubtask() {
    
  }

  handleChange(e) {
    console.log('handleChange', e.target);
    this.setState({
      [e.target.name]: e.target.value

    });
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
            <div onClick={() => this.openModalToAddTask()}>
              <Plus />
            </div>
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
              taskTitle={this.state.taskTitle}
              taskDescription={this.state.taskDescription}
              subtask={this.state.selectedTask ? this.state.selectedTask.subtasks : null}
              taskDateCreated={this.state.selectedTask ? this.state.selectedTask.dateCreated : null}
              isModalOpen={this.state.isModalOpen}
              toggleModal={this.toggleModal}
              handleChange={this.handleChange}
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

export default withSideNav(TaskView);
