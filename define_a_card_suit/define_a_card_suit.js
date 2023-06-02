function defineSuit(card) {
    if ((card[0] > 1 && card[0] < 10 || (card[0] == 1 && card[1] == 0)) || card[0] == `A` || card[0] == `J` || card[0] == `Q` || card[0] == `K`) {
        if (card[card.length - 1] == `♣`) return 'clubs';
        else if (card[card.length - 1] == `♦`) return 'diamonds';
        else if (card[card.length - 1] == `♥`) return 'hearts';
        else if (card[card.length - 1] == `♠`) return 'spades';
    }
}