// Produce data for Day Line Chart
export const lineChartDayData = (tasks) => {
  const data = tasks.map(task => {
    const total = task.subtasks.length;
    let completedCount = 0;
    task.subtasks.forEach(task => {
      if (task.complete) completedCount += 1;
    });
    const incomplete = total - completedCount;

    const dataUnit = {
      title: task.title,
      total: total,
      complete: completedCount,
      incomplete: incomplete
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
      let completedCount = 0;
      task.subtasks.forEach(subtask => {
        if (subtask.complete) completedCount += 1;
      });

      const total = task.subtasks.length;
      const result = completedCount / total;

      return {
        title: task.title,
        percent: result
      }
    }
  });

  console.log(data);
  return data;
}

export const areaChartDayData = (tasks) => {
  const data = tasks.map(task => {
    if (task.subtasks.length === 0) {
      return {
        title: task.title,
        complete: 0,
        incomplete: 0
      }
    }
    else {
      let completedCount = 0;
      const total = task.subtasks.length;

      task.subtasks.forEach(subtask => {
        if (subtask.complete) completedCount += 1;
      });

      const incomplete = total - completedCount;
      return {
        title: task.title,
        complete: completedCount,
        incomplete: incomplete
      }
    }
  });

  return data;
}