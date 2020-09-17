// Line graph will display percent complete
export const lineChartDayData = (tasks) => {
  const data = tasks.map(task => {
    const total = task.subtasks.length;
    let completedCount = 0;
    task.subtasks.forEach(task => {
      if (task.complete) completedCount += 1;
    });
    const percent = completedCount / total;

    return {
      title: task.title,
      percent: percent
    };
  });

  return data;
}

// Bar graph will display total, complete, incomplete
export const barChartDayData = (tasks) => {
  const data = tasks.map(task => {
    if (task.subtasks.length === 0) {
      return {
        title: task.title,
        total: 0,
        complete: 0,
        incomplete: 0
      }
    }
    else {
      let completedCount = 0;
      task.subtasks.forEach(subtask => {
        if (subtask.complete) completedCount += 1;
      });

      const total = task.subtasks.length;
      const incomplete = total - completedCount;

      return {
        title: task.title,
        total: total,
        complete: completedCount,
        incomplete: incomplete
      }
    }
  });

  return data;
}

// Area graph will show complete, incomplete
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