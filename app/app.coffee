# Constructors
Card = (value, suit) ->
  this.value = value
  this.suit = suit
  this.scoreValue = value

Hand = (fourCardArr, twoTossedArr) ->
  this.cardsKept = fourCardArr
  this.cardsTossed = twoTossedArr
  this.score = 0           # guaranteed score resulting from the cards currently in the player's hand
  this.expectedValue = 0   # guaranteed score + expected value resuling from possible card flips (excludes pegging)

# Generate 6 random cards
dealSixRandomCards = ->
  cardsDealt = []

  i = 0
  while i < 6
    value = random(13)
    suit = random(4)
    cardsDealt.push new Card(value, suit)
    i++
  cardsDealt

cardsDealt = dealSixRandomCards()

# Add all possible hands
findAllPossibleHands = (cardsDealt) ->
  possibleHands = []

  i = 0
  while i < cardsDealt.length
    j = 0
    while j < cardsDealt.length - 1
      fourCardArr = cardsDealt.slice()
      twoTossedArr = []
      twoTossedArr.push fourCardArr.splice i, 1
      twoTossedArr.push fourCardArr.splice j, 1
      possibleHands.push new Hand fourCardArr, twoTossedArr
      j++
    i++
  possibleHands

possibleHands = findAllPossibleHands cardsDealt

# Score each possible hand
scorePossibleHands = (possibleHands) ->
  i = 0
  while i < possibleHands.length
    possibleHands[i].score = scoreHand possibleHands[i]
    i++
  possibleHands

console.log scorePossibleHands possibleHands

# Score expected value

# Sort possible hands from highest expected value to lowest expected value



