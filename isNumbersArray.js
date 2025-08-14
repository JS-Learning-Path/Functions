function areAllNumbers(arr) {
  if (Array.isArray(arr)) {
    return arr.every((element) => typeof element === "number");
  } else {
    return false;
  }
}
console.log(areAllNumbers([1, "2", 3]));

