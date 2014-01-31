# ======= Scoring helpers ======= #
scoreHand = (hand) ->
  score = 0
  # score += scoreFifteens(hand)
  # score += scorePairs(hand)
  # score += scoreRuns(hand)
  # score += scoreFlush(hand)
  # score += scoreNobs(hand)
  score

scoreFifteens = (hand) ->


scorePairs = (hand) ->


scoreRuns = (hand) ->


scoreFlush = (hand) ->


scoreNobs = (hand) ->

# ======= Other helpers ======= #
random = (num) ->
  parseInt Math.random() * num + 1

printCardsDealt = ->
  $ ->
    $(".hand").append("<div>(#{ card.value }, #{ card.suit })</div>") for card in cardsDealt

printHandScore = (hand) ->
  $ ->
    # console.log hand.cardsTossed[1][0].value
    $(".score").append("<div>If you toss your (#{ hand.cardsTossed[0].value }, #{ hand.cardsTossed[0].suit }),
      and your (#{ hand.cardsTossed[1].value }, #{ hand.cardsTossed[1].suit }), then your score will be <b>#{ hand.score }</b></div>")