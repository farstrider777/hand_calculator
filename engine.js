var ranksArray = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
var suitsArray = ["s","h","d","c"]
var cardsArray = []

// fill cardsArray
for (i = 0; i < ranksArray.length; i++) {
  for (x = 0; x < suitsArray.length; x++) {
    cardsArray.push(ranksArray[i] + suitsArray[x])
  }
}

var handsArray = [];
// fill handsArray
var count = 0
for (i = 0; i < cardsArray.length; i++) {
  for (x = 0; x < cardsArray.length; x++) {
    if (i < x){
      handsArray.push(cardsArray[i] + cardsArray[x])
    }
  }
}

console.log(handsArray)
