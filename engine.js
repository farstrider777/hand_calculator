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

playerHandsArray = []

function dealHands(numberOfPlayers){
  for (i = 0; i < numberOfPlayers; i++){
    var chosenHand = handsArray[getRandomInt(handsArray.length)]
    console.log(chosenHand)
    playerHandsArray.push(chosenHand)
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
    console.log(playerHandsArray)
  }
}

dealHands(2);

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

function chooseBestHand() {

  console.log(playerHandsArray[0])
  console.log(playerHandsArray[1])

  var cardsInAllHandsArray = []

  for (i = 0; i < playerHandsArray.length; i++){
    //console.log("in for loop")
    cardsInAllHandsArray.push(playerHandsArray[i].charAt(0) + playerHandsArray[i].charAt(1));
    cardsInAllHandsArray.push(playerHandsArray[i].charAt(2) + playerHandsArray[i].charAt(3));
  }
  console.log(cardsInAllHandsArray[0])



  //straightflush

  //quads
  //full house
  //flush
  //str8
  //trips
  //two Pair
  //Pair
  //hicard
}

chooseBestHand()

function checkForFlush(hand){
  //if(hand.charAt(1))
}

function checkForStraight(){

}
