function drawStairs(n) {
    let array = [];
    let counter = 0;
    for (let i = 1; i < n; i++) {
        array.push("I\n");
        counter++;
        for (let j = 1; j <= counter; j++) array.push(" ");
    }
    array.push("I");
    let str = array.join("")
    return str;
}