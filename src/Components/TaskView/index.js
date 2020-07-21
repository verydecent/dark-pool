import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';
import { Plus, AngleLeft, AngleRight } from '../FAIcons';
import axios from 'axios';
import shortid from 'shortid';

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
      subtaskDescription: '',
      subtasks: [],

      // Should I just use a nested object to contain current modal?
      // No

    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addSubtask= this.addSubtask.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  componentDidMount() {
    console.log('=== TaskView componentDidMount ===');
    // Make get request for task array and setState with tasks
    // axios.get();
  }

  addTask(e) {
    console.log('somethign here');
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      subtasks: this.state.subtasks
    };

   this.setState({
      isModalOpen: this.state.isModalOpen,
      tasks: [...this.state.tasks, newTask]
   }, console.log('this.state.tasks', this.state.tasks));
  }

  updateTask(e) {
    // This will activate after updating the selected Tasks data in the state
    // We will then take the state data and create a new object
    // Search for task in task array by ID then replace the task with new task object
    // setState with newly mapped out array
    // e.preventDefault(); 
    const updatedTask = {
      id: this.state.taskId,
      title: this.state.taskTitle,
      description: this.state.taskDescription,
      subtasks: this.state.subtasks
    };

    const tasksWithUpdatedTask = this.state.tasks.map(task => {
      if (task.id === this.state.taskId) {
        return updatedTask;
      }
      else {
        return task;
      }
    });
    console.log('updateTask', tasksWithUpdatedTask);

    // setState here
    this.setState({
      tasks: tasksWithUpdatedTask
    });
  }

  deleteTask() {

    console.log('=== this.state.taskId ===', this.state.taskId)
    const newTasks = this.state.tasks.filter(task => task.id !== this.state.taskId);
    this.setState({
      tasks: newTasks
    }, () => this.toggleModal());
  }

  addSubtask(e) {
    e.preventDefault();
    const newSubtask = {
      id: Math.random(),
      complete: false,
      description: this.state.subtaskDescription
    };

    this.setState({
      subtasks: [...this.state.subtasks, newSubtask],
      subtaskDescription: ''
    });
  }

  deleteSubtask() {
    console.log('deleteSubtask');

    // filter out if the matching id and then setState with newly created array
    // Do this for tasks as well
    // const newSubtasks = this.state.subtasks.filter(subtask => )
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  toggleModal() {
    // How do I search for the selected task in the array then set it to state?
    // Search through this.state.tasks.filter then find by id? How do I create an id? 
    // If taskModal had a selected component, then make sure to clear the state of any data so new selected component can be set to state
  
    if (this.state.taskTitle === '') {
      this.setState(prevState => {
        return {
          isModalOpen: !prevState.isModalOpen,
        };
      });
    }
    else {
      this.setState(prevState => {
        return {
          isModalOpen: !prevState.isModalOpen,
          taskId: '',
          taskTitle: '',
          taskDescription: '',
          subtaskDescription: '',
          subtasks: [],
        };
      });
    }
  }

  selectTask(id, title, description, subtasks) {
    const targetedTask = this.state.tasks.filter(task => task.title === title);
    console.log('selectTask()', targetedTask);
    this.setState({
      taskId: id,
      taskTitle: title,
      taskDescription: description,
      subtasks: subtasks
    }, console.log(this.state));
  }

  render() {

    // Map out Task components we get from API call in componentDidMoun
    return (
      <div className='task-view'>
        <div className='task-view-container'>
          <div className='task-view-header-container'>
            <h2 className='task-view-title'>Daily Tasks</h2>
            <div onClick={() => this.toggleModal()}>
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
              isModalOpen={this.state.isModalOpen}
              subtaskDescription={this.state.subtaskDescription}
              subtasks={this.state.subtasks}

              /* Method Props */
              toggleModal={this.toggleModal}
              handleChange={this.handleChange}
              addTask={this.addTask}
              updateTask={this.updateTask}
              deleteTask={this.deleteTask}
              addSubtask={this.addSubtask}
            />
            <div className='task-view-list-container'>
              {this.state.tasks.map(task => <Task id={task.id} title={task.title} description={task.description} subtasks={task.subtasks} toggleModal={this.toggleModal} selectTask={this.selectTask} key={shortid.generate()} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSideNav(TaskView);
