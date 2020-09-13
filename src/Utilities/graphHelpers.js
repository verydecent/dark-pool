// Produce data for Day Line Chart
export const lineChartDayData = (tasks) => {
  const data = tasks.map(task => {
    const total = task.subtasks.length;

    const dataUnit = {
      title: task.title,
      total: total
    }

    return dataUnit;
  });

  return data;
}

export const barChartDayData = (tasks) => {
  const data = tasks.map(task => {
    if (task.subtasks.length === 0) {
      return {
        title: task.title,
        percent: 0
      }
    }
    else {
      let count = 0;
      task.subtasks.forEach(subtask => {
        if (subtask.complete) count += 1;
      });

      const total = task.subtasks.length;
      const result = count / total;

      return {
        title: task.title,
        percent: result
      }
    }
  });

  console.log(data);
  return data;
}