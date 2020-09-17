import { findDailyPercentComplete } from '../Week/helpers';

export const sortMonth = (tasks, daysInMonth) => {
  const monthDays = {};
  const days = daysInMonth;

  for (let i = 0; i < days; i++) {
    monthDays[i] = [];
  }

  for (let x = 0; x < tasks.length; x++) {
    const day = new Date(tasks[x].createdAt).getDate();
    monthDays[day].push(tasks[x]);
  }

  return monthDays;
}

export const formatData = (monthObj) => {
  const keys = Object.keys(monthObj);
  const data = [];

  for (let i = 0; i < keys.length; i++) {
    const date = parseInt(keys[i]) + 1;
    if (monthObj[i].length === 0) {
      data.push({
        date: date,
        percent: 0
      });
    }
    else {
      data.push({
        date: date,
        percent: findDailyPercentComplete(monthObj[i])
      })
    }
  }

  return data;
}