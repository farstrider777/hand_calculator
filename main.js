var calButton = document.getElementById("cal-butt");
var AK = document.getElementbyId("AK")

var arrayCards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]



function createMatrix(){
  for(i = 0; i < 13; i++){
    for(x = 0; x < 14; x++){
      if(x < 13){
        if(x === i){
          $("#new").append("<div class='boxPaired inline' id='" + arrayCards[x] + arrayCards[i] + "'>" + arrayCards[x] + arrayCards[i] + "</div>")
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

calButton.addEventListener('click', createMatrix);
