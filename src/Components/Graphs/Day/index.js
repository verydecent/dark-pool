import React from 'react';
import DayLineChart from './DayLineChart';
import DayBarChart from './DayBarChart';
import DayAreaChart from './DayAreaChart';
import axios from '../../../Utilities/axiosConfig';
import moment from 'moment';
import { isAuthenticated } from '../../../Utilities/helpers';
import { barChartDayData, lineChartDayData, areaChartDayData } from '../../../Utilities/graphHelpers';

class DayChart extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: isAuthenticated()._id,
      chartType: 'area',
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
        <button onClick={() => this.selectChart('area')}>Area Chart</button>
      </>
    );

    const lineData = lineChartDayData(this.state.tasks);
    const barData = barChartDayData(this.state.tasks);
    const areaData = areaChartDayData(this.state.tasks);

    const LineChartConditional = this.state.chartType === 'line' ? <DayLineChart data={lineData} /> : null;
    const BarChartConditional = this.state.chartType === 'bar' ? <DayBarChart data={barData} /> : null;
    const AreaChartConditional = this.state.chartType === 'area' ? <DayAreaChart data={areaData} /> : null;

    return (
      <div
        className=''
        style={{ width: 1000, height: 1000 }}
      >
        <ButtonList />
        {LineChartConditional}
        {BarChartConditional}
        {AreaChartConditional}
      </div>
    );
  }
}

export default DayChart;