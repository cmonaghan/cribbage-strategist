describe("A test", function(){
  it("should pass", function(){
    expect(true).toBe(true);
  });
});

describe("Variables declared with 'window'", function(){
  it("should be available for testing", function(){
    expect(typeof Card).not.toBe('undefined');
  });
});


describe("Cards Dealt", function(){
  var testCardsDealt = [];
  testCardsDealt.push( new Card(10, 1) );
  testCardsDealt.push( new Card(5, 1) );
  testCardsDealt.push( new Card(6, 1) );
  testCardsDealt.push( new Card(7, 1) );
  testCardsDealt.push( new Card(6, 1) );
  testCardsDealt.push( new Card(10, 2) );

  it("should have 30 possible hands", function(){
    var possibleHands = findAllPossibleHands(testCardsDealt);
    expect(possibleHands.length).toBe(30);
  });

  describe("4 card hand", function(){
    var cardsKept = testCardsDealt.slice(0,4);
    var cardsTossed = testCardsDealt.slice(4);
    var hand = new Hand(cardsKept, cardsTossed);

    it("should have 4 cards kept and 2 cards tossed", function(){
      expect(hand.cardsKept.length).toBe(4);
      expect(hand.cardsTossed.length).toBe(2);
    });

    it("should score fifteens for 2 points", function(){
      var score = scoreFifteens(hand);
      expect(score).toBe(2);
    });
  });

});
