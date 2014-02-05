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


describe("Cards Dealt", function() {

  beforeEach(function(){
    var cardsDealt = [];
    cardsDealt.push( new Card(10, 1) );
    cardsDealt.push( new Card(5, 1) );
    cardsDealt.push( new Card(6, 1) );
    cardsDealt.push( new Card(7, 1) );
    cardsDealt.push( new Card(6, 1) );
    cardsDealt.push( new Card(10, 2) );
  });

  it("should have 30 possible hands", function() {
    var possibleHands = findAllPossibleHands(cardsDealt);
    expect(possibleHands.length).toBe(30);
  });
});
