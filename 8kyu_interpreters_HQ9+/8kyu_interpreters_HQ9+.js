function HQ9(code) {
    let lyrics = "";
    if (code == 'H') return ('Hello World!');
    else if (code == 'Q') return (code);
    else if (code == '9') {
        for (let i = 99; i > 2; i--) {
            lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
        }
        lyrics += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
        lyrics += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
        lyrics += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
        return lyrics;
    }
}