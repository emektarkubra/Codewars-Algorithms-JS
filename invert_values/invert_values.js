function invert(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) arr.push(array[i] * (-1));
    return arr;
}