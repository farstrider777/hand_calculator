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
    playerHandsArray.push(chosenHand)
    var cardsMissingArray = [chosenHand.charAt(0) + chosenHand.charAt(1), chosenHand.charAt(2) + chosenHand.charAt(3)]
    cardsArray = arr_diff(cardsArray, cardsMissingArray)
    handsArray = [];
    for (a = 0; a < cardsArray.length; a++) {
      for (b = 0; b < cardsArray.length; b++) {
        if (a < b){
          handsArray.push(cardsArray[a] + cardsArray[b])
        }
      }
    }
    //console.log(handsArray)
  }
}

dealHands(2);

boardArray = []

function dealBoard() {
  for(i = 0; i < 5; i++){
    var chosenCard = cardsArray[getRandomInt(cardsArray.length)]
    boardArray.push(chosenCard)
    cardsArray = arr_diff(cardsArray, [chosenCard])
  }
  console.log(boardArray)
  console.log(playerHandsArray)
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

// returns array of hands that have a flush given this board
// takes a hand and array of board cards as its arguments
function checkForFlush(hand, board){
  // boardArray = ["2s", "Ks", "9c", "5c", "3c"]
  // playerHandsArray = ["2cTc"]

  numberOfSpades = boardArray.toString().split("s").length - 1
  numberOfHearts = boardArray.toString().split("h").length - 1
  numberOfDiamonds = boardArray.toString().split("d").length - 1
  numberOfClubs = boardArray.toString().split("c").length - 1

  if(numberOfSpades === 5) {
    console.log("spade flush on board")
    //return hand note whether it beats the board
    return //correct hand
  }
  if(numberOfHearts === 5) {
    console.log("heart flush on board")
    //return hand note whether it beats the board
    return //correct hand
  }
  if(numberOfDiamonds === 5) {
    console.log("diamond flush on board")
    //return hand note whether it beats the board
    return //correct hand
  }
  if(numberOfClubs === 5) {
    console.log("club flush on board")
    //return hand note whether it beats the board
    return //correct hand
  }

  //&& (playerHandsArray[0].charAt(1) === "s" || playerHandsArray[0].charAt(3) === "s"
  console.log(playerHandsArray[0].charAt(1) + playerHandsArray[0].charAt(3))

  if(numberOfSpades === 4 && (playerHandsArray[0].charAt(1) === "s" || playerHandsArray[0].charAt(3) === "s")) {
    console.log("report spade flush")
    return //correct hand
  }
  if(numberOfHearts === 4 && (playerHandsArray[0].charAt(1) === "h" || playerHandsArray[0].charAt(3) === "h")) {
    console.log("report heart flush")
    return //correct hand
  }
  if(numberOfDiamonds === 4 && (playerHandsArray[0].charAt(1) === "d" || playerHandsArray[0].charAt(3) === "d")) {
    console.log("report diamond flush")
    return //correct hand
  }
  if(numberOfClubs === 4 && (playerHandsArray[0].charAt(1) === "c" || playerHandsArray[0].charAt(3) === "c")) {
    console.log("report clubflush")
    return //correct hand
  }
  // 3 card flushes
  if(numberOfSpades === 3 && (playerHandsArray[0].charAt(1) === "s" & playerHandsArray[0].charAt(3) === "s")) {
    console.log("report spade flush")
    return //correct hand
  }
  if(numberOfHearts === 3 && (playerHandsArray[0].charAt(1) === "h" & playerHandsArray[0].charAt(3) === "h")) {
    console.log("report heart flush")
    return //correct hand
  }
  if(numberOfDiamonds === 3 && (playerHandsArray[0].charAt(1) === "d" & playerHandsArray[0].charAt(3) === "d")) {
    console.log("report diamond flush")
    return //correct hand
  }
  if(numberOfClubs === 3 && (playerHandsArray[0].charAt(1) === "c" & playerHandsArray[0].charAt(3) === "c")) {
    console.log("report clubflush")
    return //correct hand
  }



}


checkForFlush(playerHandsArray[0])

function checkForStraight(){

}
