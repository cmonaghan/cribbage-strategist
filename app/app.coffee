helpers = require "./helpers.js"


cardsDealt = helpers.dealSixRandomCards()

helpers.printCardsDealt cardsDealt

possibleHands = helpers.findAllPossibleHands cardsDealt

possibleHands = helpers.scorePossibleHands possibleHands

helpers.printAllPossibleHandScores possibleHands


# Score expected value

# Sort possible hands from highest expected value to lowest expected value
