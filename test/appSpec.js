// var test = require('tape');
// var myCode = require('../public/scripts/main.js');

describe("A test", function(){
  it("should pass", function(){
    expect(true).toBe(true);
  });
});

// describe("A card", function(){
//   var card = new myCode.Card(13,1);

//   it("should have a suit property", function(){
//     expect(card.suit).toBe(1);
//   });
// });

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
