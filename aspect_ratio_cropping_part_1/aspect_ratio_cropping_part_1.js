function aspectRatio(x, y) {
    x = Math.ceil((y * 16) / 9);
    return [x, y]
}