export const getTotalSubtasksAmount = (subtasks) => {
  return subtasks.length;
};

export const getCompleteSubtaskAmount = (subtasks) => {
  let count = 0;
  for (let i = 0; i < subtasks.length; i++) {
    if (subtasks[i].complete) count += 1;
  }
};

export const getIncommpleteSubtaskAmount = (subtasks) => {
  let count = 0;
  for (let i = 0; i < subtasks.length; i++) {
    if (!subtasks[i].complete) count += 1;
  }
};