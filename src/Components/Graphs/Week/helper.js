import { getTaskCompleted, getTaskIncomplete, getTaskTotal } from "../../../Utilities/subtaskHelpers";

export const sortWeek = tasks => {
  const weekdays = {};
  const numbersInAWeek = 7; // Including 0 as Monday

  for (let d = 0; d < numbersInAWeek; d++) {
    weekdays[d] = [];
  }

  tasks.forEach(task => {
    const day = new Date(task.createdAt).getDay();
    const backOne = day - 1;
    if (weekdays[backOne]) {
      weekdays[backOne].push(task);
    }
  });

  return weekdays;
}

export const findDailyPercentComplete = tasks => {
  let total = 0;
  let completed = 0;

  for (let i = 0; i < tasks.length; i++) {
    total += tasks[i].subtasks.length;
    for (let x = 0; x < tasks[i].subtasks.length; x++) {
      if (tasks[i].subtasks[x].complete) {
        completed += 1;
      }
    }
  }
  if (total === 0 && completed === 0) {
    return 0;
  }
  else {
    return parseFloat((completed / total).toFixed(2));
  }
}

export const formatLineData = (weekObj) => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const data = [];
  const keys = Object.keys(weekObj);

  for (let i = 0; i < keys.length; i++) {
    const dayTasks = weekObj[i];

    if (dayTasks.length === 0) {
      data.push({
        day: days[i],
        percent: 0
      });
    }
    else {
      data.push({
        day: days[i],
        percent: findDailyPercentComplete(dayTasks)
      });
    }
  }

  return data;
}

export const formatBarData = (weekObj) => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const data = [];
  const keys = Object.keys(weekObj);


  for (let i = 0; i < keys.length; i++) {
    const dayTasks = weekObj[i];

    if (dayTasks.length === 0) {
      data.push({
        day: days[i],
        total: 0,
        incomplete: 0,
        complete: 0
      });
    }
    else {
      data.push({
        day: days[i],
        total: getTaskTotal(dayTasks),
        complete: getTaskCompleted(dayTasks),
        incomplete: getTaskIncomplete(dayTasks)
      });
    }
  }

  return data;
}

export const formatAreaData = (weekObj) => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const data = [];
  const keys = Object.keys(weekObj);


  for (let i = 0; i < keys.length; i++) {
    const dayTasks = weekObj[i];

    if (dayTasks.length === 0) {
      data.push({
        day: days[i],
        incomplete: 0,
        complete: 0
      });
    }
    else {
      data.push({
        day: days[i],
        complete: getTaskCompleted(dayTasks),
        incomplete: getTaskIncomplete(dayTasks)
      });
    }
  }

  return data;
}