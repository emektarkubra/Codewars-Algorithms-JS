function nearestSq(n) {
    let sq1 = Math.ceil(Math.sqrt(n)) - Math.sqrt(n);
    let sq2 = Math.sqrt(n) - Math.floor(Math.sqrt(n));

    if (sq1 < sq2) return (Math.ceil(Math.sqrt(n)) * Math.ceil(Math.sqrt(n)));
    else if (sq1 > sq2) return (Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)));
    else return n;
}