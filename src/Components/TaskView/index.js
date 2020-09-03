import React from 'react';
import withSideNav from '../Hoc/withSideNav.js';
import './styles.css';
import Task from '../Task';
import TaskModal from '../TaskModal';
import { Plus, AngleLeft, AngleRight } from '../FAIcons';
import { isAuthenticated } from '../../Utilities/helpers';
import axios from 'axios';
import moment from 'moment';

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
    console.log('cdm');
    const { userId } = this.state;

    const today = moment().startOf('day');
    const todayToDate = today.startOf('day').toDate();
    const endOfTodayToDate = moment(today).endOf('day').toDate();

    const url = `${process.env.API_URL}/task/${userId}?start_date=${todayToDate}&end_date=${endOfTodayToDate}`;

    axios.get(url)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log(error)
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

  parseNextDate(e) {
    console.log('nextDate()');
    // We must update the state's currentDate to the next date using moment
    this.setState({ currentDate: this.state.currentDate.add(1, 'days') }, () => this.callTask());
  }

  parsePrevDate(e) {
    console.log('prevDate()');
    this.setState({ currentDate: this.state.currentDate.subtract(1, 'days') }, () => this.callTask());
  }

  callTask() {
    console.log('callTask()');
    const { currentDate } = this.state;
    const { userId } = this.state;

    // const todayToDate = today.toDate();
    // const endOfTodayToDate = moment(today).endOf('day').toDate();

    const beginningOfCurrentDate = currentDate.startOf('day').toDate();
    const endOfCurrentDate = moment(beginningOfCurrentDate).endOf('day').toDate();

    const url = `${process.env.API_URL}/task/${userId}?start_date=${beginningOfCurrentDate}&end_date=${endOfCurrentDate}`;

    // axios.get(`${process.env.API_URL}/task/${userId}?start_date=${todayToDate}&end_date=${endOfTodayToDate}`)

    axios.get(url)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  createTask() {
    console.log('createTask()');
    const { userId } = this.state;

    // POST request to task
    axios.post(`${process.env.API_URL}/task/${userId}`)
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
    console.log('selectTask()');
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

  updateTask(e) {
    console.log('updateTask()');
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

  deleteTask() {
    console.log('deleteTask()');
    axios.delete(`${process.env.API_URL}/task/${this.state.taskId}`)
      .then(response => {
        const taskRemoved = this.state.tasks.filter(task => {
          if (task._id === this.state.taskId) return;
          return task;
        });

        this.toggleModal();
        this.setState({
          tasks: taskRemoved
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  addSubtask(e, taskId) {
    console.log('addSubtask()');
    e.preventDefault();
    // Must update subtasks within task array and subtask array in state

    axios.post(`${process.env.API_URL}/task/${taskId}/subtask`)
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
        }, console.log('handleChangeSubtask()'));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeSubtask(e, id) {
    // e.preventDefault();
    // Clone subtasks from state to keep things immutable
    // Target subtask index
    // Update subtask with event target's value
    // setState with new array
    // Finally, proceed to Put/Patch request

    // In order to keep things immutable, create a fresh array that will be set to state later
    // Immutability keeps increases trackability and performance
    // How idk I need to research that more
    const subtaskClone = [...this.state.subtasks];
    const targetSubtaskIndex = subtaskClone.findIndex(subtask => subtask._id === id);
    subtaskClone[targetSubtaskIndex].description = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      subtasks: subtaskClone
    }, console.log('handleChangeSubtask()')));
  }

  toggleSubtask(e, taskId, subtaskId) {
    // Need to be cloning whole task array 
    const subtaskClone = [...this.state.subtasks];
    const targetSubtaskIndex = this.state.subtasks.findIndex(subtask => subtask._id === subtaskId);
    subtaskClone[targetSubtaskIndex].complete = e.target.checked;

    this.setState(prevState => {
      return {
        subtasks: subtaskClone,
        ...prevState
      }
    }, () => {
      console.log('toggleSubtask()')
      this.updateSubtask(taskId, subtaskId)
    });
  }

  updateSubtask(taskId, subtaskId) {
    console.log('updateSubtask()', this.state);
    // Find subtask with id
    const indexOfTargetSubtask = this.state.subtasks.findIndex(subtask => (subtask._id === subtaskId));

    const targetSubtask = this.state.subtasks[indexOfTargetSubtask];

    const updatedSubtask = {
      complete: targetSubtask.complete,
      description: targetSubtask.description
    };

    axios.put(`${process.env.API_URL}/task/${taskId}/subtask/${subtaskId}`, updatedSubtask)
      .then(response => {
        // Since we're already updating subtasks with the handleChange do we need to update state again?... 
        // Maybe it's good to do it i'll ask
        // Just so its like aligned with the latest database
        console.log(response);

      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteSubtask(taskId, subtaskId) {

    // filter out if the matching id and then setState with newly created array
    // Do this for tasks as well
    // const newSubtasks = this.state.subtasks.filter(subtask => )
    axios.delete(`${process.env.API_URL}/task/${taskId}/subtask/${subtaskId}`)
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
        }, console.log('deleteSubtask()', this.state));
      })
      .catch(error => console.log(error));
  }

  render() {
    // Map out Task components we get from API call in componentDidMount
    console.log('** state tasks **', this.state.tasks);
    const TasksMapped = this.state.tasks.map(task => {
      return (
        <Task
          // Values
          id={task._id}
          title={task.title}
          description={task.description}
          subtasks={task.subtasks}
          // Methods
          toggleModal={this.toggleModal}
          selectTask={this.selectTask}
          key={task._id}
        />
      );
    });

    const subtasksTotal = () => {
      let count = 0;
      this.state.tasks.forEach(task => {
        count += task.subtasks.length;
      });
      return count;
    }

    const subtasksComplete = () => {
      let completeSubtaskCount = 0;
      this.state.tasks.forEach(task => {
        task.subtasks.forEach(subtask => {
          if (subtask.complete) completeSubtaskCount++
        });
      });
      return completeSubtaskCount;
    }

    return (
      <div className='task-view'>
        <div className='task-view-container'>
          {/* HEADER */}
          <div className='task-view-header-container'>
            <h2 className='task-view-title'>Daily Tasks</h2>
            <div onClick={() => this.createTask()}>
              <Plus />
            </div>
          </div>

          {/* BODY */}
          <div className='task-view-body-container'>
            {/* BODY HEADER */}
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
            {/* Turn into component */}
            <div className='task-view-data-container'>
              <div className='task-view-graph-container'>
                Pie graph goes here
              </div>
              <div className='task-view-graph-container'>
                Tasks complete /{this.state.tasks.length}
                <br />
                Subtasks complete {subtasksComplete()} / {subtasksTotal()}
              </div>

            </div>
            {/* Turn this into a component later */}
            <div className='task-view-list-header-container'>
              {/* COLUMN */}
              <div className='task-view-list-header-container-column'>
                <h2>Title</h2>
              </div>
              {/* COLUMN */}
              <div className='task-view-list-header-container-column'>
                <h2>% Complete</h2>
              </div>
              {/* COLUMN */}
              <div className='task-view-list-header-container-column'>
                <h2>Subtasks</h2>
              </div>
              {/* COLUMN */}
            </div>

            <div className='task-view-list-container'>
              {/* Tasks Mapped */}
              {TasksMapped}
            </div>
          </div>
        </div>

        <TaskModal
          /* Values */
          taskId={this.state.taskId}
          taskTitle={this.state.taskTitle}
          taskDescription={this.state.taskDescription}
          isModalOpen={this.state.isModalOpen}
          subtasks={this.state.subtasks}

          /* Method Props */
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
      </div >
    );
  }
}

export default withSideNav(TaskView);
