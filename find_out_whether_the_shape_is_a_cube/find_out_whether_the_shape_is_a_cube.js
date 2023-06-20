var cubeChecker = function (volume, side) {
    if (side > 0 && volume == side * side * side) return true;
    return false;
};