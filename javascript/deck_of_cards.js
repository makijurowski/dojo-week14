/*jshint esversion: 6 */

class Card {
    constructor(suit, card, cardVal) {
        let currentCard = this;
        this.suit = suit;
        this.card = card;
        this.cardVal = cardVal;
        this.showCard = function() {
            return ("(" + currentCard.cardVal + " of " + currentCard.suit + ")");
        };
    }
}

class Deck {
    constructor() {
        let currentDeck = this;
        this.cardCount = 0;
        this._cardDeck = [];
        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.cards = ["Ace",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "Jack",
                      "Queen",
                      "King"
        ];
        this.vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.cardVals = {};
        for (let i = 0; i < this.vals.length; i++) {
            this.cardVals[this.vals[i]] = this.cards[i];
        }
        for (let i = 0; i < this.suits.length; i++) {
            for (let card in this.cardVals) {
                if (this.cardVals.hasOwnProperty(card)) {
                    let currentCard = new Card(this.suits[i], card, this.cardVals[card]);
                    this._cardDeck[this.cardCount] = currentCard;
                    this.cardCount += 1;
                }
            }
        }
    }

    get cardDeck() {
        return this._cardDeck;
    }
    set cardDeck(cardDeck) {
        this._cardDeck = cardDeck;
    }

    showDeck() {
        console.log("\nCURRENT DECK STATS: (CARD COUNT: " + this.cardCount + ") === (_cardDeck COUNT: " + this._cardDeck.length + ")");
        for (let i = 0; i < this.cardCount; i++) {
            if (i % 13 == 0) {
                console.log(`\n${i + 1}. ${this._cardDeck[i].showCard()}`);
            }
            else {
                console.log(`${i + 1}. ${this._cardDeck[i].showCard()}`);
            }
        }
        return this;
    }

    // Using Fisher-Yates
    shuffle() {
        // Get a random int
        let current = this;
        let random = function() {
            let min = Math.ceil(0);
            let max = Math.floor(current.cardDeck.length);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        for (let idx = 0; idx < current.cardDeck.length; idx++) {
            let randomIdx = random();
            let tempCard = current.cardDeck[idx];
            current.cardDeck[idx] = current.cardDeck[randomIdx];
            current.cardDeck[randomIdx] = tempCard;
        }
        return this;
    }

    reset() {
        let current = this;
        this.cardCount = 0;
        for (let i = 0; i < current.suits.length; i++) {
            for (let card in current.cardVals) {
                if (current.cardVals.hasOwnProperty(card)) {
                    let currentCard = new Card(current.suits[i], card, current.cardVals[card]);
                    current._cardDeck[current.cardCount] = currentCard;
                    current.cardCount += 1;
                }
            }
        }
        return this;
    }

    deal() {
        let current = this;
        let random = function() {
            let min = Math.ceil(0);
            let max = Math.floor(current.cardDeck.length);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        let randomIdx = random();
        let currentCard = current.cardDeck[randomIdx];
        current.cardDeck.splice(randomIdx, 1);
        current.cardCount -= 1;
        return currentCard;
    }
}

class Player {
    constructor(name) {
        let currentPlayer = this;
        this.name = name;
        this.hand = [];

        this.showPlayer = function() {
            // this.showHand();
            return this.showHand();
        };

        this.showHand = function() {
            console.log(`CURRENT HAND FOR ${this.name.toUpperCase()}`);
            for (let i = 0; i < this.hand.length; i++) {
                console.log(`${i + 1}. ${this.hand[i].showCard()}`);
            }
            return this;
        };

        this.takeCard = function(currentDeck) {
            let currentCard = currentDeck.deal();
            currentCard.showCard();
            this.hand[this.hand.length] = currentCard;
            return currentCard;
        };

        this.discard = function(idx) {
            let current = this;
            try {
                let discardCard = current.hand[idx - 1];
                current.hand.splice(idx - 1, 1);
                return this;
            } catch (e) {
                return "This did not work.";
            }
        };
    }
}

// Test cases
var testDeck = new Deck();
var Maki = new Player("Maki");
testDeck.shuffle();
Maki.takeCard(testDeck);
Maki.takeCard(testDeck);
Maki.takeCard(testDeck);
Maki.showPlayer();
Maki.discard(2);
Maki.showHand();
testDeck.reset();
testDeck.showDeck();