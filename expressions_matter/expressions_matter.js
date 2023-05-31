function expressionMatter(a, b, c) {
    let exp1 = eval("a+b+c");
    let exp2 = eval("a*b*c");
    let exp3 = eval("a+b*c");
    let exp4 = eval("(a+b)*c");
    let exp5 = eval("a*b+c");
    let exp6 = eval("a*(b+c)");

    let arr = [exp1, exp2, exp3, exp4, exp5, exp6];
    arr.sort((a, b) => b - a);
    return arr[0];
}