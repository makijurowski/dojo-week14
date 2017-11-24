/*jshint esversion: 6 */

class Card {
    constructor(suit, card, cardVal) {
        // Reference to current instance of card
        let currentCard = this;
        // Set card properties
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
        // Reference to current instance of deck
        let currentDeck = this;
        // Declare variables
        this.cardCount = 0;
        this._cardDeck = [];
        // Declare deck properties
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
        // Create a deck using its properties & for-loops
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
        // Get the current deck
        return this._cardDeck;
    }
    set cardDeck(cardDeck) {
        // Set the current deck
        this._cardDeck = cardDeck;
    }

    showDeck() {
        // Show the current deck information
        console.log("\nCURRENT DECK STATS: (CARD COUNT: " + this.cardCount + ") === (_cardDeck COUNT: " + this._cardDeck.length + ")");
        for (let i = 0; i < this.cardCount; i++) {
            // Only print up to 13 cards at a time to console before line-break for readability
            if (i % 13 == 0) {
                console.log(`\n${i + 1}. ${this._cardDeck[i].showCard()}`);
            }
            else {
                console.log(`${i + 1}. ${this._cardDeck[i].showCard()}`);
            }
        }
        return this;
    }

    shuffle() {
        let current = this;                                             // Reference to current instance of deck
        let random = function() {                                       // Used to generate random num in range of deck length
            let min = Math.ceil(0);
            let max = Math.floor(current.cardDeck.length);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        for (let idx = 0; idx < current.cardDeck.length; idx++) {       // Shuffle the current deck using Fisher-Yates
            let randomIdx = random();
            let tempCard = current.cardDeck[idx];
            current.cardDeck[idx] = current.cardDeck[randomIdx];
            current.cardDeck[randomIdx] = tempCard;
        }
        return this;
    }

    reset() {
        // Restore the current deck to default 
        let current = this;                                             // Reference to current instance of deck
        this.cardCount = 0;
        for (let i = 0; i < current.suits.length; i++) {
            for (let card in current.cardVals) {
                if (current.cardVals.hasOwnProperty(card)) {
                    let currentCard = new Card(current.suits[i], card, current.cardVals[card]);
                    current._cardDeck[current.cardCount] = currentCard;
                    current.cardCount += 1;                             // Add 1 to total count of cards
                }
            }
        }
        return this;
    }

    deal() {
        // Deal a card
        let current = this;                                              // Reference to current instance of deck
        let random = function() {                                        // Function to generate num in range of deck length
            let min = Math.ceil(0);
            let max = Math.floor(current.cardDeck.length);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        let randomIdx = random();
        let currentCard = current.cardDeck[randomIdx];
        current.cardDeck.splice(randomIdx, 1);                          // Splice the array to remove the dealt card
        current.cardCount -= 1;                                         // Reduce total count of cards by 1
        return currentCard;
    }
}

class Player {
    constructor(name) {
        let currentPlayer = this;                                       // Reference to current instance of player
        // Declare player properties
        this.name = name;
        this.hand = [];

        this.showPlayer = function() {
            return this.showHand();
        };

        // Print to console current player's hand information
        this.showHand = function() {
            console.log(`CURRENT HAND FOR ${this.name.toUpperCase()}`);
            for (let i = 0; i < this.hand.length; i++) {
                console.log(`${i + 1}. ${this.hand[i].showCard()}`);
            }
            return this;
        };

        // Use the deck's deal function for player to draw card to hand
        this.takeCard = function(currentDeck) {
            let currentCard = currentDeck.deal();
            currentCard.showCard();
            this.hand[this.hand.length] = currentCard;
            return currentCard;
        };

        // Discard the passed in card (1 added to offset 0 position)
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