var arrayCards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
createMatrix();

function changeBoxColor(event){
  var myDivId = `#${event.target.id}`
  $(myDivId).css("background-color", "yellow");
}

function createMatrix(){
  for(i = 0; i < 13; i++){
    for(x = 0; x < 14; x++){
      if(x < 13){
        if(x === i){
          //$("#new").append("<div class='boxPaired inline' id='" + arrayCards[x] + arrayCards[i] + "'>" + arrayCards[x] + arrayCards[i] + "</div>")
          $("#new").append(`<div class='boxPaired inline' id='${arrayCards[x] + arrayCards[i]}'> ${arrayCards[x] + arrayCards[i]} </div>`)
          // is it better with interpolation instead of concatation?
        }else if(x < i){
          $("#new").append("<div class='boxUnsuited inline' id='" + arrayCards[x] + arrayCards[i] + "'>" + arrayCards[x] + arrayCards[i] + "</div>")
        }
        else{
          $("#new").append("<div class='boxSuited inline' id='"+ arrayCards[i] + arrayCards[x] +"s'>" + arrayCards[i] + arrayCards[x] + "</div>")
        }
      }else{
        $("#new").append("<br>")
      }
    }
  }
}

var AA = document.getElementById("AA");
var KK = document.getElementById("KK");
var QQ = document.getElementById("QQ");
var JJ = document.getElementById("JJ");
var TT = document.getElementById("TT");
var n99 = document.getElementById("99");
var n88 = document.getElementById("88");
var n77 = document.getElementById("77");
var n66 = document.getElementById("66");
var n55 = document.getElementById("55");
var n44 = document.getElementById("44");
var n33 = document.getElementById("33");
var n22 = document.getElementById("22");

AA.addEventListener('click', changeBoxColor);
KK.addEventListener('click', changeBoxColor);
QQ.addEventListener('click', changeBoxColor);
JJ.addEventListener('click', changeBoxColor);
TT.addEventListener('click', changeBoxColor);
n99.addEventListener('click', changeBoxColor);
n88.addEventListener('click', changeBoxColor);
n77.addEventListener('click', changeBoxColor);
n66.addEventListener('click', changeBoxColor);
n55.addEventListener('click', changeBoxColor);
n44.addEventListener('click', changeBoxColor);
n33.addEventListener('click', changeBoxColor);
n22.addEventListener('click', changeBoxColor);


var AKs = document.getElementById("AKs");

AKs.addEventListener('click', changeBoxColor);
