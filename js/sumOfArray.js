function sumOfArray(array) {
  let i;
  let sum = 0;
  for (i = 0; i < array.length; i + 1) {
    sum += array.length[i];
  }
  return sum;
}
sumOfArray([2, 3, 4, 5]);
sumOfArray([]);
sumOfArray([0, -1, 3]);
