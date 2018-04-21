function arr_diff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
}

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
for (i = 0; i < cardsArray.length; i++) {
  for (x = 0; x < cardsArray.length; x++) {
    if (i < x){
      handsArray.push(cardsArray[i] + cardsArray[x])
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var count = 0

function dealHands(numberOfPlayers){
  for (i = 0; i < numberOfPlayers; i++){
    var chosenHand = handsArray[getRandomInt(handsArray.length)]
    count++;
    console.log(count)
    console.log(chosenHand)
    console.log(handsArray.length)
    var cardsMissingArray = [chosenHand.charAt(0) + chosenHand.charAt(1), chosenHand.charAt(2) + chosenHand.charAt(3)]
    console.log(cardsMissingArray)
    cardsArray = arr_diff(cardsArray, cardsMissingArray)
    console.log(cardsArray)
    handsArray = [];
    for (a = 0; a < cardsArray.length; a++) {
      for (b = 0; b < cardsArray.length; b++) {
        if (a < b){
          handsArray.push(cardsArray[a] + cardsArray[b])
        }
      }
    }
    console.log(handsArray)
  }
}

dealHands(1);

boardArray = []

function dealBoard() {
  console.log(cardsArray.length)
  for(i = 0; i < 5; i++){
    var chosenCard = cardsArray[getRandomInt(cardsArray.length)]
    console.log(chosenCard)
    boardArray.push(chosenCard)
    cardsArray = arr_diff(cardsArray, [chosenCard])
    console.log(cardsArray.length)
  }
  console.log(boardArray)
}

dealBoard();
