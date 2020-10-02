import React from 'react';
import withNav from '../Hoc/withNav';
import './styles.css';
import moment from 'moment';
import axios from '../../Utilities/axiosConfig';
import GraphContainer from './GraphContainer';
import { TaskGauge, SubtaskGauge } from '../Graphs/dashboardGraphs';
import {
  getSubtaskTotalFromTasks,
  getSubtaskCompletedFromTasks,
  getSubtaskIncompleteFromTasks,
  getTaskTotal,
  getTaskCompleted,
  getTaskIncomplete
} from '../../Utilities/subtaskHelpers';
import { connect } from 'react-redux';
import { resetToCurrentDate } from '../../Redux/actionCreators';
/*
Graph options

Showing percentage complete
Y axis: 0 - 100%
X axis: different depending on time view

Showing amounts of subtasks
- Total
- Complete
- Incomplete

Helpers

Userflow

Opening dashboard will open up current day and percent complete of each task
Line chart will show how much complete, incomplete, total subtasks there are per task

level 1 buttons => {
  Views
  Day
  Week
  Month
  Year
}

level 2 buttons => {
  Percent Complete (Bar Chart)
  Amount of tasks (Line Chart showing three lines 1. Total 2. Complete 3. Incomplete)
  Amount of subtasks (Line Chart showing three lines 1. Total 2. Complete 3. Incomplete)
}


State = {
  view: (can be day, view, week, month) default - day
  graphType: (can be percentBarChart, tasksLineChart, subtaskLineChart) default - overall percent complete
}


How to choose time frame?

Day
  * selected day
  beginningOfCurrentDay - endOfCurrentDay

Week
  * selected day, group week
  beginningOfMonday(relativeToCurrentDay) - endOfSunday(relativeToCurrentDay)

Month
  * month that selected day is in
  beginningOfTheFirstDayOfMonth(relativeToCurrentDay) - endOfTheLastDayOfTheMonth(relativeToCurrentDay)

Year
  * selected year
  beginningOfJanuraryFirst(SelectedYear) - endOfDecemberThirtyFirst(selectedYear)


Have dashboard control view selection while graph class components are responsible for making the proper get request

Would be expensive to make request for YTD data
Just make specific requests.... ? But i feel like its liekly they will click on YTD anyway so.... hmmmm


GET request button view onClick?
Or..
GET request ALL data on componentDidMount then use helper to filter depending on View and state options
*/

class DashboardView extends React.Component {
  constructor() {
    super();
    this.state = {
      // Graph
      timeFrame: 'day',
      graphType: 'line',
      // Tasks for Graph
      tasks: [],
    };
  }

  componentDidMount() {
    this.callTasks();
  }

  componentWillUnmount() {
    this.props.resetToCurrentDate();
  }

  callTasks = () => {
    const { userId, dateContext } = this.props;

    const newDateContext = moment(Object.assign({}, dateContext));
    const startDate = newDateContext.startOf(this.state.timeFrame).toDate();
    const endDate = newDateContext.endOf(this.state.timeFrame).toDate();

    axios.get(`task/${userId}?start_date=${startDate}&end_date=${endDate}`)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectGraphType = e => this.setState({ ...this.state, graphType: e.target.value });

  selectTimeFrame = e => this.setState({ ...this.state, timeFrame: e.target.value }, this.callTasks);

  timeFrametitle = () => {
    if (this.state.timeFrame === 'day') {
      return 'Daily'
    }
    else if (this.state.timeFrame === 'isoWeek') {
      return 'Weekly'
    }
    else if (this.state.timeFrame === 'month') {
      return 'Monthly'
    }
    else if (this.state.timeFrame === 'year') {
      return 'Yearly'
    }
  }

  graphTypeTitle = () => {
    if (this.state.graphType === 'line') {
      return 'Line Graph'
    }
    else if (this.state.graphType === 'area') {
      return 'Area Graph'
    }
    else if (this.state.graphType === 'bar') {
      return 'Bar Graph'
    }
  }

  currentTimeFrame = () => {
    if (this.state.timeFrame === 'day') return this.props.dateContext.format('dddd LL');
    else if (this.state.timeFrame === 'isoWeek') return `Week of ${this.props.dateContext.format('LL')}`;
    else if (this.state.timeFrame === 'month') return this.props.dateContext.format('MMMM YYYY');
    else if (this.state.timeFrame === 'year') return this.props.dateContext.format('YYYY');
  }

  render() {
    const TimeFrameButtons = () => (
      <select className='grey-button' value={this.state.timeFrame} onChange={(e) => this.selectTimeFrame(e)}>
        <option value='day'>Day View</option>
        <option value='isoWeek'>Week View</option>
        <option value='month'>Month View</option>
        <option value='year'>Year View</option>
      </select>
    );

    const GraphTypeButtons = () => (
      <select className='grey-button' value={this.state.graphType} onChange={(e) => this.selectGraphType(e)}>
        <option value='line'>Line Graph</option>
        <option value='bar'>Bar Graph</option>
        <option value='area'>Area View</option>
      </select>
    );

    return (
      <>
        <div className='data-view'>
          <div className='data-view-header-left'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Dashboard
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-box-container'>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Incomplete
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskIncomplete(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskIncompleteFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Completed
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskCompleted(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskCompletedFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
                <div className='data-view-box'>
                  <span className='data-view-title'>
                    Total
                  </span>
                  <span className='data-view-number tasks'>
                    {getTaskTotal(this.state.tasks)} <span className='data-view-mini'>tasks</span>
                  </span>
                  <span className='data-view-number subtasks'>
                    {getSubtaskTotalFromTasks(this.state.tasks)} <span className='data-view-mini'>subtasks</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='data-view-header-right'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Task Progress
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-gauge-container'>
                <TaskGauge tasks={this.state.tasks} />
              </div>
            </div>
          </div>
          <div className='data-view-header-right'>
            <div className='data-view-header-top'>
              <h1 className='header-1'>
                Subtask Progress
              </h1>
            </div>
            <div className='data-view-header-bottom'>
              <div className='data-view-gauge-container'>
                <SubtaskGauge tasks={this.state.tasks} />
              </div>
            </div>
          </div>
        </div>
        <div className='dashboard-view'>
          <div className='dashboard-view-container'>
            <div className='dashboard-view-header'>
              <h1 className='header-1'>
                {`${this.timeFrametitle()} ${this.graphTypeTitle()}  `}
              </h1>
              <span className='date-title'>
                {this.currentTimeFrame()}
              </span>
            </div>
            <div className='dashboard-view-subheader'>
              <div className='dashboard-view-button-list'>
                <div>
                  <TimeFrameButtons />
                  <GraphTypeButtons />
                </div>
              </div>
            </div>
            <GraphContainer
              tasks={this.state.tasks}
              timeFrame={this.state.timeFrame}
              graphType={this.state.graphType}
              dateContext={this.props.dateContext}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
    dateContext: state.dateContext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetToCurrentDate: () => dispatch(resetToCurrentDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNav(DashboardView));