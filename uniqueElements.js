function uniqueElements(arr) {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        seen.add(arr[i]);
    }
    return Array.from(seen);
}
console.log(uniqueElements([1, 2, 3, 4, 5, 1, 2]));