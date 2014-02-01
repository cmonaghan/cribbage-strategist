helpers = require "./helpers.coffee"


cardsDealt = helpers.dealSixRandomCards()

helpers.printCardsDealt cardsDealt

possibleHands = helpers.findAllPossibleHands cardsDealt

possibleHands = helpers.scorePossibleHands possibleHands

helpers.printAllPossibleHandScores possibleHands

console.log helpers.valueSum(possibleHands[1])

# Score expected value

# Sort possible hands from highest expected value to lowest expected value
