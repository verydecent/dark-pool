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
    const percent = decimal * 100;
    return percent;
  }
}