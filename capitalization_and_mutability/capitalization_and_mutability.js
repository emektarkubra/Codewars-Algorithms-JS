function capitalizeWord(word) {
    let emptyStr = "";
    let str = emptyStr + (word[0].toUpperCase());
    for (let i = 1; i < word.length; i++) str += word[i];
    return str;
}