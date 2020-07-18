import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';
import { Plus, AngleLeft, AngleRight } from '../FAIcons';
import axios from 'axios';

class TaskView extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isModalOpen: false,
      
      // State display for currently selected task modal
      taskId: '',
      taskTitle: '',
      taskDescription: '',
      subtasks: [],

      // Should I just use a nested object to contain current modal?
      // No

    };

    this.openModalToAddTask = this.openModalToAddTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.addSubtask= this.addSubtask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('=== TaskView componentDidMount ===');
    // Make get request for task array and setState with tasks
    //
    // axios.get();
    

  }

  addTask() {
    const newTask = {
      id: Math.random(),
      title: this.state.taskTitle,
      description: this.state.descriptionTitle,
      subtasks: this.state.taskSubtasks
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    }, console.log('this.state.tasks', this.state.tasks));
  }

  openModalToAddTask() {
    this.toggleModal();
  }

  addSubtask() {
    const newSubtask = {
      complete: false,
      description: this.state.subtaskDescription
    };

    this.setState({
      subtasks: [...this.state.subtasks, newSubtask],
      subtaskDescription: ''
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value

    });
  }

  toggleModal() {
    // How do I search for the selected task in the array then set it to state?
    // Search through this.state.tasks.filter then find by id? How do I create an id? 
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen
      };
    });
  }

  render() {

    // Map out Task components we get from API call in componentDidMoun
    return (
      <div className='task-view'>
        <div className='task-view-container'>
          <div className='task-view-header-container'>
            <h2 className='task-view-title'>Your Tasks</h2>
            <div onClick={() => this.openModalToAddTask()}>
              <Plus />
            </div>
          </div>
         
          <div className='task-view-body-container'>
            <div className='task-view-body-container-header'>
              <h2 className='date-header'>Wed July 8 2020</h2>
              <div className='task-view-carousel-buttons'>
                <div>
                  <AngleLeft />
                </div>
                <div>
                  <AngleRight />
                </div>
              </div>
            </div>

            <TaskModal
              /* Values */
              taskTitle={this.state.taskTitle}
              taskDescription={this.state.taskDescription}
              subtask={this.state.selectedTask ? this.state.selectedTask.subtasks : null}
              taskDateCreated={this.state.selectedTask ? this.state.selectedTask.dateCreated : null}
              isModalOpen={this.state.isModalOpen}
              subtaskTitle={this.state.subtaskTitle}

              /* Method Props */
              toggleModal={this.toggleModal}
              handleChange={this.handleChange}
              addTask={this.addTask}
              addSubtask={this.addSubtask}
            />
            <div className='task-view-list-container'>
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
