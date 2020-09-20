// Task Helpers to see amount of tasks complete

export const getTaskTotal = tasks => {
  return tasks.length;
}

export const getTaskCompleted = tasks => {
  return tasks.length;
}

export const getTaskIncomplete = tasks => {
  return tasks.length;
}

// Helpers that receive array of tasks with subtask arrays

export const getSubtaskTotalFromTasks = tasks => {
  let total = 0;

  for (let i = 0; i < tasks.length; i++) {
    total += tasks[i].subtasks.length;
  }

  return total;
}

export const getSubtaskCompletedFromTasks = tasks => {
  let completed = 0;

  for (let i = 0; i < tasks.length; i++) {
    for (let x = 0; x < tasks[i].subtasks.length; x++) {
      if (tasks[i].subtasks[x].complete) {
        completed += 1;
      }
    }
  }

  return completed
}

export const getSubtaskIncompleteFromTasks = tasks => {
  let total = 0;

  for (let i = 0; i < tasks.length; i++) {
    total += tasks[i].subtasks.length;
    for (let x = 0; x < tasks[i].subtasks.length; x++) {
      if (tasks[i].subtasks[x].complete) {
        total -= 1;
      }
    }
  }

  return total;
}

// Helpers for just subtask array used in Modal of Task View

export const getTotalSubtaskAmount = (subtasks) => {
  return subtasks.length;
};

export const getCompleteSubtaskAmount = (subtasks) => {
  let count = 0;
  for (let i = 0; i < subtasks.length; i++) {
    if (subtasks[i].complete) count += 1;
  }
  return count;
};

export const getIncommpleteSubtaskAmount = (subtasks) => {
  let count = 0;
  for (let i = 0; i < subtasks.length; i++) {
    if (!subtasks[i].complete) count += 1;
  }
  return count;
};

export const getCompleteSubtaskPercent = (complete, total) => {
  if (complete === 0 && total === 0) {
    return 0;
  }
  else {
    // Reduce fraction to decimal
    const decimal = complete / total;
    // Multiply by 100 to get whole number percent
    const percent = (decimal * 100).toFixed(1);
    return percent;
  }
}