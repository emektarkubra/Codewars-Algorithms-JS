function toCsvText(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lastNum = array[i].pop();
        array[i].push(lastNum + "\n");
    }
    let str = array.join("")
    return str;
}