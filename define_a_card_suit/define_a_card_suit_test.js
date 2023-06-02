const assert = require('chai').assert;

describe("Basic tests", () => {
    it('Testing №1 for "3♣"', () => {
        let actualClubs = defineSuit('3♣');
        assertNotPrinting(actualClubs);
        assert.strictEqual(actualClubs, 'clubs');
    });
    it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
    it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
    it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

    function assertNotPrinting(actual) {
        assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
    }
});