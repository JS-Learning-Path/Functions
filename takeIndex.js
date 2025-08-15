const myArray = [10, 20, 30, 40, 50];
function getElement(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new Error("The index is out of range");
  }
  return arr[index];
}

console.log(getElement(myArray, 2)); 





