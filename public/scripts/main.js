// A simple assert function to throw errors
var assert = function(test, description) {
  if (!test) {
    throw 'Error. ' + description;
  }
};

// -------------- Constructors -------------- //
var Card = function(value, suit) {
  assert(typeof value === 'number' && typeof suit === 'number', 'Card constructor must receive numbers.');
  assert(value > 0 && value < 14, 'Card constructor must receive a value between 1-13.');
  assert(suit > 0 && suit < 5, 'Card constructor must receive a suit between 1-4.');

  this.suit = suit;
  this.value = value;
  this.scoreValue = value > 10 ? 10 : value;
};

var Hand = function(fourCardsKept, twoCardsTossed) {
  assert(fourCardsKept !== undefined && fourCardsKept.length === 4, 'Hand constructor expects a 4-card array.');
  assert(twoCardsTossed !== undefined && twoCardsTossed.length === 2, 'Hand constructor expects a 2-card array.');

  // make sure each array only holds Card objects
  fourCardsKept.forEach( function(item) {
    assert(item instanceof Card === true, 'Hand was passed a non-card object');
  });
  twoCardsTossed.forEach( function(item) {
    assert(item instanceof Card === true, 'Hand was passed a non-card object');
  });

  this.fourCardsKept = fourCardsKept;
  this.twoCardsTossed = twoCardsTossed;
  this.score = scoreHand(fourCardsKept);
};

// -------------- Scoring -------------- //
var scoreHand = function(fourCardsKept){
  var totalScore = 0;
  totalScore += scorePairs(fourCardsKept);
  return totalScore;
};


// -------------- Helpers -------------- //
function scorePairs(fourCardsKept){
  var pairCount = 0;
  // sort cards by value
  fourCardsKept = fourCardsKept.sort( function(a,b){return a.value - b.value;} );
  for (var i = 0; i < fourCardsKept.length-1; i++) {
    if (fourCardsKept[i].value === fourCardsKept[i+1].value) {
      pairCount += 1;
    }
  }
  return pairCount * 2; // score is 2 points per pair
}
