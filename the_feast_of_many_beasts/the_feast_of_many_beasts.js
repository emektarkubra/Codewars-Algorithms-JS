function feast(beast, dish) {
    beast.toLowerCase().trim();
    dish.toLowerCase().trim();

    if (beast[0] === dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) return true;
    return false;
}