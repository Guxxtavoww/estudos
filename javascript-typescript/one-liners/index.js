const calculatePercentage = (value, totalValue) =>
  Math.round((value / totalValue) * 100); // calculatePercentage(6, 11) -> 55

const getRandomArrayIndex = (array) =>
  array[Math.floor(Math.random * array.length)];

const removeDuplicatedArrayIndexes = (array) => [...new Set(array)];

const sortArrayBy = (array, key) =>
  array.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

