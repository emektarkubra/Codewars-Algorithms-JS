var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears == 1) return [1, 15, 15];
    else if (humanYears == 2) return [2, 24, 24];
    else return [humanYears, (24 + 4 * (humanYears - 2)), (24 + 5 * (humanYears - 2))];
}