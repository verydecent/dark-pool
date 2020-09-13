import React from 'react';
import DayLineChart from './DayLineChart';
import DayBarChart from './DayBarChart';
import axios from '../../../Utilities/axiosConfig';
import moment from 'moment';
import { isAuthenticated } from '../../../Utilities/helpers';
import { barChartDayData, lineChartDayData } from '../../../Utilities/graphHelpers';

class DayChart extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: isAuthenticated()._id,
      chartType: 'bar',
      tasks: []
    }

    this.selectChart = this.selectChart.bind(this);
  }
  // get current day always

  componentDidMount() {
    // Grab current date data
    const { userId } = this.state;
    const today = moment().startOf('day');
    const beginningOfTodayToDate = today.startOf('day').toDate();
    const endOfTodayToDate = moment(today).endOf('day').toDate();
    axios.get(`/task/${userId}?start_date=${beginningOfTodayToDate}&end_date=${endOfTodayToDate}`)
      .then(response => {
        console.log(response.data);
        this.setState({ ...this.state, tasks: response.data }, console.log('state', this.state));
      })
      .catch(error => {
        console.log(error);
      })
  }

  selectChart(chartType) {
    this.setState({ chartType });
  }

  render() {
    // default render will be percent complete

    const ButtonList = () => (
      <>
        <button onClick={() => this.selectChart('bar')}>Bar Chart</button>
        <button onClick={() => this.selectChart('line')}>Line Chart</button>
      </>
    );

    const lineChartData = lineChartDayData(this.state.tasks);
    const barChartData = barChartDayData(this.state.tasks);

    const LineChartConditional = this.state.chartType === 'line' ? <DayLineChart data={lineChartData} /> : null;
    const BarChartConditional = this.state.chartType === 'bar' ? <DayBarChart /> : null;

    return (
      <div className=''>
        <ButtonList />
        {LineChartConditional}
        {BarChartConditional}

        Calendar Here Will be able to select date showing current month
      </div>
    );
  }
}

export default DayChart;