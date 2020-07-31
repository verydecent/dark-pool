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
      userId: '5f2397d202ea39098fee8bfe',
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
    this.createTask = this.createTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addSubtask= this.addSubtask.bind(this);
    this.deleteSubtask = this.deleteSubtask.bind(this);
  }

  componentDidMount() {
    console.log('======= CDM =======');
    // Make get request for task array and setState with tasks
    axios.get(`http://localhost:3000/task/${this.state.userId}`)
      .then(response => {
        console.log(response);
        this.setState({ tasks: response.data });
      })
      .catch(error => console.log(error));
  }

  selectTask(id, title, description) {
    axios.get(`http://localhost:3000/subtask/${id}`)
      .then(response => {
        const subtasks = response.data;
        console.log(subtasks)

        this.setState({
          taskId: id,
          taskTitle: title,
          taskDescription: description,
          subtasks: subtasks
        });
      })
      .catch(error => console.log(error));
  }

  createTask() {
    this.toggleModal();
    
    // POST request to task
    axios.post('http://localhost:3000/task', { user_id: this.state.userId })
      .then((response) => {
        this.setState(prevState => {
          return {
            taskId: response.data._id,
            tasks: [...prevState.tasks, response.data ]
          };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addTask(e) {
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
   });
  }

  updateTask(e) {
    // This will activate after updating the selected Tasks data in the state
    // We will then take the state data and create a new object
    // Search for task in task array by ID then replace the task with new task object
    e.preventDefault();
    const updatedTask = {
      title: this.state.taskTitle,
      description: this.state.taskDescription
    };

    axios.put(`http://localhost:3000/task/${this.state.taskId}`, updatedTask)
      .then((response) => {
        const arrayWithUpdatedTask = this.state.tasks.map(task => {
          if (task._id === response.data._id) {
            // Deep copy of object
            const newTask = JSON.parse(JSON.stringify(task));
            newTask.title = response.data.title;
            newTask.description = response.data.description;
            console.log('newTask', newTask);
            
            return newTask;
          }
          return task;
        })
        this.setState({
          taskTitle: response.data.title,
          taskDescription: response.data.taskDescription,
          tasks: arrayWithUpdatedTask
        });
      })
      .catch(error => console.log(error));
  }

  deleteTask() {
  //   console.log('=== this.state.taskId ===', this.state.taskId)
  //   const newTasks = this.state.tasks.filter(task => task.id !== this.state.taskId);
  //   this.setState({
  //     tasks: newTasks
  //   }, () => this.toggleModal());
  }

  addSubtask(e) {
    e.preventDefault();

    const newSubtask = {
      complete: false,
      description: this.state.subtaskDescription,
      task_id: this.state.taskId
    };

    axios.post('http://localhost:3000/subtask', newSubtask)
      .then(response => {
        console.log('Subtask Response', response);
        this.setState(prevState => {
          return {
            subtaskDescription: '',
            subtasks: [...prevState.subtasks, response.data]
          };
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteSubtask(subtaskId) {
    const newSubtasks = this.state.subtasks.filter(subtask => subtask.id !== subtaskId);

    // filter out if the matching id and then setState with newly created array
    // Do this for tasks as well
    // const newSubtasks = this.state.subtasks.filter(subtask => )
    this.setState({
      subtasks: newSubtasks
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  toggleModal() {
    // this.setState({ isModalOpen: !this.state.isModalOpen });
    // How do I search for the selected task in the array then set it to state?
    // Search through this.state.tasks.filter then find by id? How do I create an id? 
    // If taskModal had a selected component, then make sure to clear the state of any data so new selected component can be set to state
    if (this.state.isModalOpen) {
      this.setState(prevState => {
            return {
              isModalOpen: false,
              taskId: '',
              taskTitle: '',
              taskDescription: '',
              subtaskDescription: '',
              subtasks: [],
            };
          });
    }
    else {
      this.setState(prevState => {
        return {
          isModalOpen: true
        };
      });
    }
  }

  render() {

    // Map out Task components we get from API call in componentDidMoun
    return (
      <div className='task-view'>
        <div className='task-view-container'>
          <div className='task-view-header-container'>
            <h2 className='task-view-title'>Daily Tasks</h2>
            <div onClick={() => this.createTask()}>
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
              deleteSubtask={this.deleteSubtask}
            />
            <div className='task-view-list-container'>
              {this.state.tasks.map(task => {
                console.log('from task', task);
                return (
                  <Task
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    toggleModal={this.toggleModal}
                    selectTask={this.selectTask}
                    key={shortid.generate()}
                  />
                );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSideNav(TaskView);
