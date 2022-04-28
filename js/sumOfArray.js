function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i + 1) {
    sum += arr[i];
  }
  return sum;
}
sumOfArray([1, 2, 3, 4, 8]);
