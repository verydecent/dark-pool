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
      chartType: 'area',
    }

    this.selectChart = this.selectChart.bind(this);
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

    const lineData = lineChartDayData(this.props.tasks);
    const barData = barChartDayData(this.props.tasks);
    const areaData = areaChartDayData(this.props.tasks);

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