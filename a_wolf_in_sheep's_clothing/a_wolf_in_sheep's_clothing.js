function warnTheSheep(queue) {
    let N = queue.length - 1;
    for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i] === "wolf") {
            return `Oi! Sheep number ${N}! You are about to be eaten by a wolf!`
        }
        N--;
    }
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }
}