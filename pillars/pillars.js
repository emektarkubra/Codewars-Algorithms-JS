function pillars(numPill, dist, width) {
    if (numPill === 1) return 0;
    return (((numPill - 2) * width)) + ((numPill - 1) * dist * 100);
}