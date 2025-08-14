function sumTheEvenNumbers(arr) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
}
console.log(sumTheEvenNumbers([1, 2, 3, 4, 5, 6]));
