// Tasks will be from jan 1 - Dec 31
// Loop and sort into object with 12 properties representing each month

export const sortYear = tasks => {
  const year = {};
  const monthsInYear = 12;

  for (let i = 0; i < monthsInYear; i++) {
    year[i] = [];
  }

  for (let x = 0; x < tasks.length; x++) {
    const month = new Date(tasks[x].createdAt).getMonth();
    console.log('month', month);
    year[month].push(tasks[x]);
  }

  return year;
}