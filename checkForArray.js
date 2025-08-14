function isItArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length;
  } else {
    return `Array has been expected`;
  }
}
console.log(isItArray([1, 2, 3]));
