function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let pairs = arr[i] - arr[i + 1];
        total += pairs;
    }
    return total;
}