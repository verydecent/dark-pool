export const sortWeek = tasks => {
  const weekdays = {};
  const numbersInAWeek = 7;

  for (let d = 0; d < numbersInAWeek; d++) {
    weekdays[d] = [];
  }

  tasks.forEach(task => {
    const day = new Date(task.createdAt).getDay();
    weekdays[day].push(task);
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

  const percent = parseFloat((completed / total).toFixed(2));

  return percent;
}

export const formatData = (weekObj) => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const data = [];
  const keys = Object.keys(weekObj);

  for (let i = 0; i < keys.length; i++) {
    const dayTasks = weekObj[i];

    if (dayTasks.length === 0) {
      data[i - 1] = {
        day: days[i - 1],
        percent: 0
      }
    }
    else {
      data[i - 1] = {
        day: days[i - 1],
        percent: findDailyPercentComplete(dayTasks)
      }
    }
  }

  return data;
}