function points(games) {
    let p = 0;
    for (let i = 0; i < 10; i++) {
        if (Number(games[i][0]) > Number(games[i][2])) p += 3;
        if (Number(games[i][0]) == Number(games[i][2])) p += 1;
        if (Number(games[i][0]) < Number(games[i][2])) p += 0;
    }
    return p;
}