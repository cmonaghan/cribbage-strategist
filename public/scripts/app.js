// Generated by CoffeeScript 1.7.0
var cardsDealt, helpers, possibleHands;

helpers = require("./helpers.js");

cardsDealt = helpers.dealSixRandomCards();

helpers.printCardsDealt(cardsDealt);

possibleHands = helpers.findAllPossibleHands(cardsDealt);

possibleHands = helpers.scorePossibleHands(possibleHands);

helpers.printAllPossibleHandScores(possibleHands);
