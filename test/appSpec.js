describe("A test", function(){
  it("should pass", function(){
    expect(true).toBe(true);
  });
});

describe("A card", function(){
  var card = new Card(13,1);

  it("should have a suit and value property", function(){
    expect(card.suit).not.toBe(undefined);
    expect(card.value).not.toBe(undefined);
  });

  it("should have a scoreValue of 10 for values exceeding 10", function(){
    expect(new Card(13,1).scoreValue).toBe(10);
    expect(new Card(11,1).scoreValue).toBe(10);
    expect(new Card(9,1).scoreValue).toBe(9);
  });

  it("should throw an exception when passed illegal values or suits", function(){
    expect( function(){ new Card(14,1); } ).toThrow();
    expect( function(){ new Card(11,0); } ).toThrow();
    expect( function(){ new Card(13,4); } ).not.toThrow();
    expect( function(){ new Card(1,1); } ).not.toThrow();
  });

});

// describe("Cards Dealt", function(){
//   var testCardsDealt = [];
//   testCardsDealt.push( new Card(10, 1) );
//   testCardsDealt.push( new Card(5, 1) );
//   testCardsDealt.push( new Card(6, 1) );
//   testCardsDealt.push( new Card(7, 1) );
//   testCardsDealt.push( new Card(6, 1) );
//   testCardsDealt.push( new Card(10, 2) );

//   it("should have 30 possible hands", function(){
//     var possibleHands = findAllPossibleHands(testCardsDealt);
//     expect(possibleHands.length).toBe(30);
//   });

//   describe("4 card hand", function(){
//     var cardsKept = testCardsDealt.slice(0,4);
//     var cardsTossed = testCardsDealt.slice(4);
//     var hand = new Hand(cardsKept, cardsTossed);

//     it("should have 4 cards kept and 2 cards tossed", function(){
//       expect(hand.cardsKept.length).toBe(4);
//       expect(hand.cardsTossed.length).toBe(2);
//     });

//     it("should score fifteens for 2 points", function(){
//       var score = scoreFifteens(hand);
//       expect(score).toBe(2);
//     });
//   });

// });
