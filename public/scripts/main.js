var assert = function(test, description) {
  if (!test) {
    throw 'Error. ' + description;
  }
};

var Card = function(value, suit) {
  this.suit = suit;
  this.value = value;
  this.scoreValue;
  value > 10 ? this.scoreValue = 10 : this.scoreValue = value;
};

var Hand = function(fourCardsKept, twoCardsTossed) {
  assert(fourCardsKept !== undefined && fourCardsKept.length === 4, 'The Hand constructor expects a 4-card array.');
  assert(twoCardsTossed !== undefined && twoCardsTossed.length === 2, 'The Hand constructor expects a 2-card array.');

  this.fourCardsKept = fourCardsKept;
  this.twoCardsTossed = twoCardsTossed;
};