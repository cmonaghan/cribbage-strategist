$ = require "jquery"

# ======= Constructors ======= #
window.Card = (value, suit) ->
  this.value = value
  this.suit = suit
  this.scoreValue = value

window.Hand = (fourCardArr, twoTossedArr) ->
  this.cardsKept = fourCardArr
  this.cardsTossed = twoTossedArr
  # guaranteed score resulting from the cards currently in the player's hand
  this.score = 0
  # guaranteed score + expected value resulting
  # from possible card flips (excludes pegging)
  this.expectedValue = 0

# ======= Scoring helpers ======= #
scorePossibleHands = (possibleHands) ->
  i = 0
  while i < possibleHands.length
    possibleHands[i].score = scoreIndividualHand possibleHands[i]
    i++
  possibleHands

scoreIndividualHand = (hand) ->
  score = 0
  hand = scoreFifteens(hand)
  # score += scorePairs(hand)
  # score += scoreRuns(hand)
  # score += scoreFlush(hand)
  # score += scoreNobs(hand)
  score

window.scoreFifteens = (hand) ->
  # console.log valueSum hand

  threeCardFifteen = (hand) ->
    # hand.score += 2 for card in hand if
  hand = threeCardFifteen hand

scorePairs = (hand) ->


scoreRuns = (hand) ->


scoreFlush = (hand) ->


scoreNobs = (hand) ->

# ======= Other helpers ======= #
# Generate random integers between 1 and the num entered
random = (num) ->
  parseInt Math.random() * num + 1

valueSum = (cards) ->
  sum = 0
  sum += card.value for card in cards
  sum

dealSixRandomCards = ->
  cardsDealt = []

  i = 0
  while i < 6
    value = random(13)
    suit = random(4)
    cardsDealt.push new Card(value, suit)
    i++
  cardsDealt

dealSixDefinedCards = ->
  cardsDealt = []
  cardsDealt.push new Card(10, 1)
  cardsDealt.push new Card(5, 1)
  cardsDealt.push new Card(6, 1)
  cardsDealt.push new Card(7, 1)
  cardsDealt.push new Card(6, 1)
  cardsDealt.push new Card(10, 2)
  cardsDealt

window.findAllPossibleHands = (cardsDealt) ->
  possibleHands = []

  i = 0
  while i < cardsDealt.length
    j = 0
    while j < cardsDealt.length - 1
      fourCardArr = cardsDealt.slice()
      twoTossedArr = []
      twoTossedArr.push (fourCardArr.splice i, 1)[0]
      twoTossedArr.push (fourCardArr.splice j, 1)[0]
      possibleHands.push new Hand fourCardArr, twoTossedArr
      j++
    i++
  possibleHands

# ======= Printing helpers ======= #
printCardsDealt = (cardsDealt) ->
  $ ->
    $(".hand").append("<div>(#{ card.value }, #{ card.suit })</div>") \
        for card in cardsDealt

printAllPossibleHandScores = (possibleHands) ->
  printIndividualHandScore hand for hand in possibleHands

printIndividualHandScore = (hand) ->
  $ ->
    # console.log hand.cardsTossed[1][0].value
    $(".score").append("<div>If you toss your
      (#{ hand.cardsTossed[0].value }, #{ hand.cardsTossed[0].suit }), and your
      (#{ hand.cardsTossed[1].value }, #{ hand.cardsTossed[1].suit }),
      then your score will be <b>#{ hand.score }</b></div>")

# ======= Exports ======= #
module.exports.scorePossibleHands = scorePossibleHands
module.exports.dealSixRandomCards = dealSixRandomCards
module.exports.dealSixDefinedCards = dealSixDefinedCards
module.exports.printCardsDealt = printCardsDealt
module.exports.findAllPossibleHands = findAllPossibleHands
module.exports.printAllPossibleHandScores = printAllPossibleHandScores
module.exports.valueSum = valueSum
