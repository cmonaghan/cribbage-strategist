# Constructors
Card = (value, suit) ->
  this.value = value
  this.suit = suit
  this.scoreValue = value

Hand = (fourCardArr, twoTossedArr) ->
  this.cardsKept = fourCardArr
  this.cardsTossed = twoTossedArr
  this.expectedValue = 0

# Generate 6 random cards
cardsDealt = []

i = 0
while i < 6
  value = random(13)
  suit = random(4)
  cardsDealt.push new Card(value, suit)
  i++

console.log cardsDealt

# Add all possible hands and score each
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

console.log possibleHands

# Sort possible hands from highest expected value to lowest expected value


# ======= Scoring helpers ======= #
scoreHand = (hand) ->
  score = 0
  score += scoreFifteens(hand)
  score += scorePairs(hand)
  score += scoreRuns(hand)
  score += scoreFlush(hand)
  score += scoreNobs(hand)
  hand.score = score

scoreFifteens = (hand) ->


scorePairs = (hand) ->


scoreRuns = (hand) ->


scoreFlush = (hand) ->


scoreNobs = (hand) ->


