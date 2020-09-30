import React from 'react';
import './styles.css';
import withNav from '../Hoc/withNav.js';
import TaskModal from '../TaskModal';
import { isAuthenticated } from '../../Utilities/helpers';
import axios from '../../Utilities/axiosConfig';
import moment from 'moment';
import Header from './Header';
import Subheader from './Subheader';
import ListHeader from './ListHeader';
import List from './List';
import { connect } from 'react-redux';
import CalendarModal from '../CalendarModal';
import { toggleCalendarModal } from '../../Redux/Actions';

class TaskView extends React.Component {
  constructor() {
    super();
    this.state = {
      // Tasks
      tasks: [],
      // Selected task
      taskId: '',
      taskTitle: '',
      taskDescription: '',
      subtasks: [],
      // Helpers
      userId: isAuthenticated()._id,
      isModalOpen: false,
      currentDate: moment(),
    };

    // Main
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.parseNextDate = this.parseNextDate.bind(this);
    this.parsePrevDate = this.parsePrevDate.bind(this);
    this.callTask = this.callTask.bind(this);

    // Task
    this.createTask = this.createTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

    // Subtask
    this.addSubtask = this.addSubtask.bind(this);
    this.updateSubtask = this.updateSubtask.bind(this);
    this.toggleSubtask = this.toggleSubtask.bind(this);
    this.deleteSubtask = this.deleteSubtask.bind(this);
    this.handleChangeSubtask = this.handleChangeSubtask.bind(this);
  }

  componentDidMount() {
    const { userId } = this.state;

    let date = Object.assign({}, this.state.currentDate);
    date = moment(date);
    let beginning;
    let end;

    beginning = date.startOf('day').toDate();
    end = date.endOf('day').toDate();

    axios.get(`task/${userId}?start_date=${beginning}&end_date=${end}`)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log(error)
      });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleModal() {
    // this.setState({ isModalOpen: !this.state.isModalOpen });
    // How do I search for the selected task in the array then set it to state?
    // Search through this.state.tasks.filter then find by id? How do I create an idq? 
    // If taskModal had a selected component, then make sure to clear the state of any data so new selected component can be set to state
    if (this.state.isModalOpen) {
      this.setState(prevState => {
        return {
          isModalOpen: false,
          taskId: '',
          taskTitle: '',
          taskDescription: '',
          subtasks: [],
        };
      });
    }
    else {
      this.setState(prevState => {
        return {
          ...prevState,
          isModalOpen: true
        };
      });
    }
  }

  parseNextDate() {
    this.setState({ currentDate: this.state.currentDate.add(1, 'days') }, () => this.callTask());
  }

  parsePrevDate() {
    this.setState({ currentDate: this.state.currentDate.subtract(1, 'days') }, () => this.callTask());
  }

  callTask() {
    const { currentDate } = this.state;
    const { userId } = this.state;

    const beginningOfCurrentDate = currentDate.startOf('day').toDate();
    const endOfCurrentDate = moment(beginningOfCurrentDate).endOf('day').toDate();

    axios.get(`task/${userId}?start_date=${beginningOfCurrentDate}&end_date=${endOfCurrentDate}`)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  createTask() {
    const { userId } = this.state;

    axios.post(`task/${userId}`)
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

  selectTask(id, title, description, subtasks) {
    // Should we accept arguments from props
    // OR should I use a loop everytime to target with id?
    // I think since we already have the value we can just pass as arguments instead of having the loop?
    this.setState(prevState => {
      return {
        ...prevState,
        taskId: id,
        taskTitle: title,
        taskDescription: description,
        subtasks: subtasks
      }
    });
  }

  updateTask(e, taskId) {
    // This will activate after updating the selected Tasks data in the state
    // We will then take the state data and create a new object
    // Search for task in task array by ID then replace the task with new task object
    e.preventDefault();
    const updatedTask = {
      title: this.state.taskTitle,
      description: this.state.taskDescription
    };

    axios.put(`task/${taskId}`, updatedTask)
      .then((response) => {
        const arrayWithUpdatedTask = this.state.tasks.map(task => {
          if (task._id === response.data._id) {
            // Deep copy of object
            const newTask = JSON.parse(JSON.stringify(task));
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

  deleteTask(taskId) {
    axios.delete(`task/${taskId}`)
      .then(response => {
        const taskRemoved = this.state.tasks.filter(task => {
          if (task._id === taskId) return;
          return task;
        });

        this.toggleModal();
        this.setState({
          tasks: taskRemoved
        });
      })
      .catch(error => console.log(error));
  }

  addSubtask(e, taskId) {
    e.preventDefault();

    axios.post(`task/${taskId}/subtask`)
      .then(response => {
        this.setState(prevState => {
          const immutableTasks = [...prevState.tasks].map(task => {
            if (task._id === taskId) return response.data;
            return task;
          });

          return {
            ...prevState,
            tasks: immutableTasks,
            subtasks: response.data.subtasks
          };
        });
      })
      .catch(error => console.log(error));
  }

  handleChangeSubtask(e, subtaskId) {
    // Clone subtasks from state to keep things immutable
    // Target subtask index
    // Update subtask with event target's value
    // setState with new array
    // Finally, proceed to Put/Patch request

    // In order to keep things immutable, create a fresh array that will be set to state later
    // Immutability keeps increases trackability and performance
    // How idk I need to research that more

    const subtasksClone = this.state.subtasks.map(subtask => {
      if (subtask._id === subtaskId) {
        subtask.description = e.target.value;
      }
      return subtask;
    });

    this.setState(prevState => ({
      ...prevState,
      subtasks: subtasksClone
    }));
  }

  toggleSubtask(e, taskId, subtaskId) {
    // Need to be cloning whole task array
    const subtasksClone = this.state.subtasks.map(subtask => {
      if (subtask._id === subtaskId) {
        subtask.complete = e.target.checked;
      }
      return subtask;
    });

    this.setState(prevState => {
      return {
        ...prevState,
        subtasks: subtasksClone
      }
    }, () => this.updateSubtask(taskId, subtaskId));
  }

  updateSubtask(taskId, subtaskId) {
    const indexOfTargetSubtask = this.state.subtasks.findIndex(subtask => (subtask._id === subtaskId));
    const targetSubtask = this.state.subtasks[indexOfTargetSubtask];

    const updatedSubtask = {
      complete: targetSubtask.complete,
      description: targetSubtask.description
    };

    axios.put(`task/${taskId}/subtask/${subtaskId}`, updatedSubtask)
      .then(response => {
        // Since we're already updating subtasks with the handleChange do we need to update state again?... 
        // Maybe it's good to do it i'll ask
        // Just so its like aligned with the latest database
      })
      .catch(error => console.log(error));
  }

  deleteSubtask(taskId, subtaskId) {
    // filter out if the matching id and then setState with newly created array
    // Do this for tasks as well
    // const newSubtasks = this.state.subtasks.filter(subtask => )
    axios.delete(`task/${taskId}/subtask/${subtaskId}`)
      .then(response => {
        this.setState(prevState => {
          const immutableTasks = [...prevState.tasks].map(task => {
            if (task._id === taskId) return response.data;
            return task;
          });

          return {
            ...prevState,
            tasks: immutableTasks,
            subtasks: response.data.subtasks
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <CalendarModal
          isCalendarModalOpen={this.props.isCalendarModalOpen}
          toggleCalendarModal={this.props.CalendarModal}
        />
        <div className='task-view'>
          <TaskModal
            /* Values */
            isModalOpen={this.state.isModalOpen}
            taskId={this.state.taskId}
            taskTitle={this.state.taskTitle}
            taskDescription={this.state.taskDescription}
            subtasks={this.state.subtasks}
            /* Methods */
            toggleModal={this.toggleModal}
            handleChange={this.handleChange}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
            addSubtask={this.addSubtask}
            handleChangeSubtask={this.handleChangeSubtask}
            toggleSubtask={this.toggleSubtask}
            updateSubtask={this.updateSubtask}
            deleteSubtask={this.deleteSubtask}
          />
          <Header />
          <Subheader
            date={this.state.currentDate}
            createTask={this.createTask}
            parseNextDate={this.parseNextDate}
            parsePrevDate={this.parsePrevDate}
            toggleCalendarModal={this.props.toggleCalendarModal}
          />
          <ListHeader />
          <List
            tasks={this.state.tasks}
            toggleModal={this.toggleModal}
            selectTask={this.selectTask}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCalendarModalOpen: state.isCalendarModalOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCalendarModal: () => dispatch(toggleCalendarModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNav(TaskView));