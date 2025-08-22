function findTheMiddle(arr) {
    if (arr.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(arr.length / 2);
    return arr[middleIndex];
}
console.log(findTheMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9])); 