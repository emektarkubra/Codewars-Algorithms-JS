function whoseMove(lastPlayer, win) {
    //coding and coding..
    if (lastPlayer == "black" && win == false) return "white";
    if (lastPlayer == "black" && win == true) return "black";
    if (lastPlayer == "white" && win == false) return "black";
    if (lastPlayer == "white" && win == true) return "white";
}