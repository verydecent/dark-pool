import { findDailyPercentComplete } from "../Week/helper";
import { getTaskTotal, getTaskCompleted, getTaskIncomplete } from '../../../Utilities/subtaskHelpers';

export const sortYear = tasks => {
  const year = {};
  const monthsInYear = 12;

  for (let i = 0; i < monthsInYear; i++) {
    year[i] = [];
  }

  for (let x = 0; x < tasks.length; x++) {
    const month = new Date(tasks[x].createdAt).getMonth();
    if (year[month]) {
      year[month].push(tasks[x]);
    }
  }

  return year;
}

export const formatLineData = yearObj => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [];
  const keys = Object.keys(yearObj);

  for (let i = 0; i < keys.length; i++) {
    const monthlyTasks = yearObj[i];

    if (monthlyTasks.length === 0) {
      data.push({
        month: months[i],
        percent: 0
      });
    }
    else {
      data.push({
        month: months[i],
        percent: findDailyPercentComplete(monthlyTasks)
      });
    }
  }

  return data;
}

export const formatBarData = yearObj => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [];
  const keys = Object.keys(yearObj);

  for (let i = 0; i < keys.length; i++) {
    const monthlyTasks = yearObj[i];

    if (monthlyTasks.length === 0) {
      data.push({
        month: months[i],
        total: 0,
        complete: 0,
        incomplete: 0
      });
    }
    else {
      data.push({
        month: months[i],
        total: getTaskTotal(monthlyTasks),
        complete: getTaskCompleted(monthlyTasks),
        incomplete: getTaskIncomplete(monthlyTasks),
      });
    }
  }

  return data;
}

export const formatAreaData = yearObj => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [];
  const keys = Object.keys(yearObj);

  for (let i = 0; i < keys.length; i++) {
    const monthlyTasks = yearObj[i];

    if (monthlyTasks.length === 0) {
      data.push({
        month: months[i],
        percent: 0
      });
    }
    else {
      data.push({
        month: months[i],
        complete: getTaskCompleted(monthlyTasks),
        incomplete: getTaskIncomplete(monthlyTasks),
      });
    }
  }

  return data;
}