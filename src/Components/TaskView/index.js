import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';
import { Plus, AngleLeft, AngleRight } from '../FAIcons';
import { isAuthenticated } from '../../Utilities/helpers';
import axios from 'axios';
import shortid from 'shortid';
import moment from 'moment';

class TaskView extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      tasks: [],
      isModalOpen: false,

      currentDate: moment(),

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
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addSubtask = this.addSubtask.bind(this);
    this.deleteSubtask = this.deleteSubtask.bind(this);
    this.parseNextDate = this.parseNextDate.bind(this);
    this.parsePrevDate = this.parsePrevDate.bind(this);
    this.callTask = this.callTask.bind(this);
  }

  componentDidMount() {
    const userId = isAuthenticated()._id;

    const today = moment().startOf('day');
    const todayToDate = today.startOf('day').toDate();
    console.log(todayToDate)
    const endOfTodayToDate = moment(today).endOf('day').toDate();
    const url = `${process.env.API_URL}/task/${userId}?start_date=${todayToDate}&end_date=${endOfTodayToDate}`;
    console.log('======= CDM =======', url);
    // Make get request for task array and setState with tasks
    axios.get(url)
      .then(response => {
        console.log('response ===> ', response);
        this.setState({ tasks: response.data });
      })
      .catch(error => console.log(error));
  }

  selectTask(id, title, description) {
    axios.get(`${process.env.API_URL}/subtask/${id}`)
      .then(response => {
        const subtasks = response.data;

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
    const userId = isAuthenticated()._id;

    // POST request to task
    axios.post(`${process.env.API_URL}/task`, { user_id: userId })
      .then((response) => {
        this.setState(prevState => {
          return {
            taskId: response.data._id,
            tasks: [...prevState.tasks, response.data]
          };
        });
      })
      .catch(function (error) {
        console.log(error);
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

    axios.put(`${process.env.API_URL}/task/${this.state.taskId}`, updatedTask)
      .then((response) => {
        console.log(
          'Response after updating Task', response
        );
        const arrayWithUpdatedTask = this.state.tasks.map(task => {
          if (task._id === response.data._id) {
            // Deep copy of object
            const newTask = JSON.parse(JSON.stringify(task));
            console.log('newTask from JSON PARSE', newTask);
            newTask.title = response.data.title;
            newTask.description = response.data.description;

            return newTask;
          }
          return task;
        });
        this.setState({
          taskTitle: response.data.title,
          taskDescription: response.data.description,
          tasks: arrayWithUpdatedTask
        });
      })
      .catch(error => console.log(error));
  }

  deleteTask() {
    axios.delete(`${process.env.API_URL}/task/${this.state.taskId}`)
      .then(response => {
        console.log(response)
        const taskRemoved = this.state.tasks.filter(task => {
          if (task._id === this.state.taskId) return;
          return task;
        });

        this.toggleModal();
        this.setState({
          tasks: taskRemoved
        });
      })
      .catch(error => console.log(error));
  }

  addSubtask(e) {
    e.preventDefault();

    axios.post(`${process.env.API_URL}/subtask/${this.state.taskId}`)
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

  updateSubtask(id) {
    axios.put(`${process.env.API_URL}/subtask/${id}`)
      .then(response => {
        // Grab the newly updated subtask
        // Filter through this.state.subtasks, find the id and then replace that object in a newly created array then setState with that new array
        const updatedSubtasks = this.state.subtasks.map(subtask => {
          if (subtask._id === id) {
            subtask.description = response.data.description;
            subtask.complete = response.data.complete;
          }
        });
        this.setState({ subtasks: updatedSubtasks });
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  deleteSubtask(id) {
    // filter out if the matching id and then setState with newly created array
    // Do this for tasks as well
    // const newSubtasks = this.state.subtasks.filter(subtask => )
    axios.delete(`${process.env.API_URL}/subtask/${id}`)
      .then(response => {
        console.log(response)
        const subtaskRemoved = this.state.subtasks.filter(subtask => {
          if (subtask._id === this.state.id) return;
          return subtask;
        });

        this.setState({
          subtask: subtaskRemoved
        });
      })
      .catch(error => console.log(error));
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

  parseNextDate(e) {
    // We must update the state's currentDate to the next date using moment
    this.setState({ currentDate: this.state.currentDate.add(1, 'days') });
    this.callTask();
  }

  parsePrevDate(e) {
    this.setState({ currentDate: this.state.currentDate.subtract(1, 'days') });
    this.callTask();
  }

  callTask() {
    console.log('callTask');
    const { currentDate } = this.state;
    const userId = isAuthenticated()._id;

    // const todayToDate = today.toDate();
    // const endOfTodayToDate = moment(today).endOf('day').toDate();

    const beginningOfCurrentDate = currentDate.startOf('day').toDate();
    console.log('beg', beginningOfCurrentDate);
    const endOfCurrentDate = moment(beginningOfCurrentDate).endOf('day').toDate();
    console.log('end', endOfCurrentDate);

    const url = `${process.env.API_URL}/task/${userId}?start_date=${beginningOfCurrentDate}&end_date=${endOfCurrentDate}`;

    // axios.get(`${process.env.API_URL}/task/${userId}?start_date=${todayToDate}&end_date=${endOfTodayToDate}`)

    axios.get(`${process.env.API_URL}/task/${userId}?start_date=${beginningOfCurrentDate}&end_date=${endOfCurrentDate}`)
      .then(response => {
        console.log('response', response);
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log('error', error);
      });
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
              <h2 className='date-header'>{this.state.currentDate.format('llll')}</h2>
              <div className='task-view-carousel-buttons'>
                <div onClick={(e) => this.parseNextDate(e)}>
                  <AngleRight />
                </div>
                <div onClick={(e) => this.parsePrevDate(e)}>
                  <AngleLeft />
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
              updateTask={this.updateTask}
              deleteTask={this.deleteTask}
              addSubtask={this.addSubtask}
              deleteSubtask={this.deleteSubtask}
              updateSubtask={this.updateSubtask}
            />
            <div className='task-view-list-container'>
              {this.state.tasks.map(task => {
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
