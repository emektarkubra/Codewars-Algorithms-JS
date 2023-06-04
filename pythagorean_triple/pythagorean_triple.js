function isPythagoreanTriple(integers) {
    integers.sort((a, b) => a - b);
    if (integers[0] ** 2 + integers[1] ** 2 == integers[2] ** 2) return true;
    return false;
}