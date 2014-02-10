var assert = function(test, description) {
  if (!test) {
    throw 'Error. ' + description;
  }
};

var Card = function(value, suit) {
  assert(value > 0 && value < 14, 'Card constructor must receive a value between 1-13.');
  assert(suit > 0 && suit < 5, 'Card constructor must receive a suit between 1-4.');

  this.suit = suit;
  this.value = value;
  this.scoreValue;
  value > 10 ? this.scoreValue = 10 : this.scoreValue = value;
};

var Hand = function(fourCardsKept, twoCardsTossed) {
  assert(fourCardsKept !== undefined && fourCardsKept.length === 4, 'Hand constructor expects a 4-card array.');
  assert(twoCardsTossed !== undefined && twoCardsTossed.length === 2, 'Hand constructor expects a 2-card array.');

  this.fourCardsKept = fourCardsKept;
  this.twoCardsTossed = twoCardsTossed;
};