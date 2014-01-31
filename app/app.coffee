Card = (value, suit) ->
  this.value = value
  this.suit = suit
  this.scoreValue = value

sixCardHand = []

i = 0
while i < 6
  value = random(13)
  suit = random(4)
  sixCardHand.push new Card(value, suit)
  i++

console.log sixCardHand

scoreHand = (hand) ->
  score = 0
  score += scoreFifteens(hand)
  score += scorePairs(hand)
  score += scoreRuns(hand)
  score += scoreFlush(hand)
  score += scoreNobs(hand)
  score


# ======= Scoring helpers ======= #
scoreFifteens = (hand) ->


scorePairs = (hand) ->


scoreRuns = (hand) ->


scoreFlush = (hand) ->


scoreNobs = (hand) ->


