import moment from 'moment';

// seperators for x axis  weeks - 7 days, months - 28 - 31, year - 12
// Then we only ahve a couple of functions that calculate for complete, incomplete, total, and percent complete etc.

export const sortIntoWeekDays = tasks => {
  const days = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  };

  tasks.forEach(task => {
    const day = moment(task.createAt).day();
    if (day === 1) {
      days[1].push(task);
    }
    else if (day === 2) {
      days[2].push(task);
    }
    else if (day === 3) {
      days[3].push(task);
    }
    else if (day === 4) {
      days[4].push(task);
    }
    else if (day === 5) {
      days[5].push(task);
    }
    else if (day === 6) {
      days[6].push(task);
    }
    else if (day === 7) {
      days[7].push(task);
    }
  });

  return days;
}

// Daily percent complete of Task from array of Subtasks complete
export const getDailyPercentage = dailyTasks => {
  let subtasksTotal = 0;
  let subtasksComplete = 0;

  dailyTasks.forEach(task => {
    subtasksTotal += task.subtasks.length;
    task.subtasks.forEach(subtask => subtask.complete ? subtasksComplete += 1 : null);
  });

  return subtasksComplete / subtasksTotal;
}

export const formatWeeklyData = (tasks) => {
  const sortedTasks = sortIntoWeekDays(tasks);

  const keys = Object.keys(sortedTasks);

  const data = [];

  for (let i = 0; i < keys.length; i++) {
    const dailyPercent = getDailyPercentage(sortedTasks[i]);
    data.push(dailyPercent);
  }

  return data;
}

// Line Chart final data output

/* const data = [

  {
    day: 'Monday',
    percent: 1
  },
  {
    day: 'Tuesday',
    percent: 1
  },
  {
    day: 'Wednesday',
    percent: 1
  },
  {
    day: 'Thursday',
    percent: 1
  },
  {
    day: 'Friday',
    percent: 1
  },
  {
    day: 'Saturday',
    percent: 1
  },
  {
    day: 'Sunday',
    percent: 1
  }

] */

// Bar Chart final data output

/* const data = [

  {
    day: 'Monday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Tuesday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Wednesday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Thursday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Friday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Saturday',
    total: 10,
    complete: 7
    incomplete: 3

  },
  {
    day: 'Sunday',
    total: 10,
    complete: 7
    incomplete: 3

  }

] */