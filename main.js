var arrayCards = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
createMatrix();
var allHands = []
const sklanskyChubukov = ["AA","KK","AKs","QQ","AK","JJ","AQs","TT","AQ","99","AJs","88","ATs",
                        "AJ","77","66","AT","A9s","55","A8s","KQs","44","A9","A7s","KJs","A5s",
                        "A8","A6s","A4s","33","KTs","A7","A3s","KQ","A2s","A5","A6","A4","KJ",
                        "QJs","A3","22","K9s","A2","KT","QTs","K8s","K7s","JTs","K9","K6s","QJ",
                        "Q9s","K5s","K8","K4s","QT","K7","K3s","K2s","Q8s","K6","J9s","K5","Q9",
                        "JT","K4","Q7s","T9s","Q6s","K3","J8s","Q5s","K2","Q8","Q4s","J9","Q3s",
                        "T8s","J7s","Q7","Q2s","Q6","98s","Q5","J8","T9","J6s","T7s","J5s","Q4",
                        "J4s","J7","Q3","97s","T8","J3s","T6s","Q2","J2s","87s","J6","98","T7",
                        "96s","J5","T5s","T4s","86s","J4","T6","97","T3s","76s","95s","J3","T2s",
                        "87","85s","96","T5","J2","75s","94s","T4","65s","86","93s","84s","95",
                        "T3","76","92s","74s","54s","T2","85","64s","83s","94","75","82s","73s",
                        "93","65","53s","63s","84","92","43s","74","72s","54","64","52s","62s",
                        "83","42s","82","73","53","63","32s","43","72","52","62","42","32"]

//for loop to fill out all the cards
for(i = 0; i < 13; i++){
  for(x = 0; x < 13; x++){
    if (x < i){
      allHands.push("#" + arrayCards[x] + arrayCards[i] + "s")
    } else {
      allHands.push("#" + arrayCards[i] + arrayCards[x])
    }
  }
}
var sklanskyChubukovPlus = [];
//for loop to add # to sklanskyChubukov ratings
function convertArray () {
  for(i = 0; i < sklanskyChubukov.length; i++){
    sklanskyChubukovPlus[i] = "#" + sklanskyChubukov[i]
  }
}

//convertArray();

var totalPercentage = 0;

// sklansky-chubukov slider 1
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    changeByPercentage(this.value, sklanskyChubukovPlus);
}

// equilab slider 2
var slider2 = document.getElementById("secondRange");
var output2 = document.getElementById("secondValue");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider2 value (each time you drag the slider handle)
slider2.oninput = function() {
    output2.innerHTML = this.value;
    changeByPercentage(this.value, sklanskyChubukovPlus);
}

function changeByPercentage(newPercentage, handSchema){
  convertArray();
  totalPercentage = 0;
  count = 0;
  if (newPercentage == 100){
    convertArray();
    changeAllBoxColor(handSchema)
  } else if (newPercentage == 0) {
    changeAllBoxColor([])
  } else {
    for(i = 0; i < 169; i++){
      addToTotal(handSchema[i])
      if (totalPercentage >= newPercentage){
        count = i;
        break;
      }
    }
    totalPercentage = 0;
    changeAllBoxColor(handSchema.splice(0, count + 1))
  }
}



function changeAllBoxColor(handList){
  totalPercentage = 0;
  for(i = 0; i < handList.length; i++){
    $(handList[i]).css("background-color", "yellow");
    addToTotal(handList[i]);
  }

  var handsNotInPercentage = arr_diff(handList, allHands)

  for(i = 0; i < handsNotInPercentage.length; i++){
      $(handsNotInPercentage[i]).css("background-color", "");
  }

  $("#totalPercentage").html(Math.round(totalPercentage * 10000)/10000)
}


function changeBoxColor(event){
  var myDivId = `#${event.target.id}`
  if($(myDivId).css("background-color") === "rgb(255, 255, 0)"){
    $(myDivId).css("background-color", "");
    subtractFromTotal(myDivId);
  }else{
    $(myDivId).css("background-color", "yellow");
    addToTotal(myDivId);
  }
  $("#totalPercentage").html(Math.round(totalPercentage * 10000)/10000)
  // .0754
  // .3016  .4524  .9048
  // 23.5248 5.8812 70.5744 = 99.9804
  // 0.075414781297134
  //0.301659125188536  0.452488687782804 0.904977375565608
}

function addToTotal(myDivId){
  if(myDivId.length === 4){
    totalPercentage = totalPercentage + 0.301659125188536
  }else if(myDivId[1] === myDivId[2]){
    totalPercentage = totalPercentage + 0.452488687782804
  }else{
    totalPercentage = totalPercentage + 0.904977375565608
  }
}

function subtractFromTotal(myDivId){
  if(myDivId.length === 4){
    totalPercentage = totalPercentage - 0.301659125188536
  }else if(myDivId[1] === myDivId[2]){
    totalPercentage = totalPercentage - 0.452488687782804
  }else{
    totalPercentage = totalPercentage - 0.904977375565608
  }
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

//Pairs
document.getElementById("AA").addEventListener('click', changeBoxColor);
document.getElementById("KK").addEventListener('click', changeBoxColor);
document.getElementById("QQ").addEventListener('click', changeBoxColor);
document.getElementById("JJ").addEventListener('click', changeBoxColor);
document.getElementById("TT").addEventListener('click', changeBoxColor);
document.getElementById("99").addEventListener('click', changeBoxColor);
document.getElementById("88").addEventListener('click', changeBoxColor);
document.getElementById("77").addEventListener('click', changeBoxColor);
document.getElementById("66").addEventListener('click', changeBoxColor);
document.getElementById("55").addEventListener('click', changeBoxColor);
document.getElementById("44").addEventListener('click', changeBoxColor);
document.getElementById("33").addEventListener('click', changeBoxColor);
document.getElementById("22").addEventListener('click', changeBoxColor);

//Suited
document.getElementById("AKs").addEventListener('click', changeBoxColor);
document.getElementById("AQs").addEventListener('click', changeBoxColor);
document.getElementById("AJs").addEventListener('click', changeBoxColor);
document.getElementById("ATs").addEventListener('click', changeBoxColor);
document.getElementById("A9s").addEventListener('click', changeBoxColor);
document.getElementById("A8s").addEventListener('click', changeBoxColor);
document.getElementById("A7s").addEventListener('click', changeBoxColor);
document.getElementById("A6s").addEventListener('click', changeBoxColor);
document.getElementById("A5s").addEventListener('click', changeBoxColor);
document.getElementById("A4s").addEventListener('click', changeBoxColor);
document.getElementById("A3s").addEventListener('click', changeBoxColor);
document.getElementById("A2s").addEventListener('click', changeBoxColor);

document.getElementById("KQs").addEventListener('click', changeBoxColor);
document.getElementById("KJs").addEventListener('click', changeBoxColor);
document.getElementById("KTs").addEventListener('click', changeBoxColor);
document.getElementById("K9s").addEventListener('click', changeBoxColor);
document.getElementById("K8s").addEventListener('click', changeBoxColor);
document.getElementById("K7s").addEventListener('click', changeBoxColor);
document.getElementById("K6s").addEventListener('click', changeBoxColor);
document.getElementById("K5s").addEventListener('click', changeBoxColor);
document.getElementById("K4s").addEventListener('click', changeBoxColor);
document.getElementById("K3s").addEventListener('click', changeBoxColor);
document.getElementById("K2s").addEventListener('click', changeBoxColor);

document.getElementById("QJs").addEventListener('click', changeBoxColor);
document.getElementById("QTs").addEventListener('click', changeBoxColor);
document.getElementById("Q9s").addEventListener('click', changeBoxColor);
document.getElementById("Q8s").addEventListener('click', changeBoxColor);
document.getElementById("Q7s").addEventListener('click', changeBoxColor);
document.getElementById("Q6s").addEventListener('click', changeBoxColor);
document.getElementById("Q5s").addEventListener('click', changeBoxColor);
document.getElementById("Q4s").addEventListener('click', changeBoxColor);
document.getElementById("Q3s").addEventListener('click', changeBoxColor);
document.getElementById("Q2s").addEventListener('click', changeBoxColor);

document.getElementById("JTs").addEventListener('click', changeBoxColor);
document.getElementById("J9s").addEventListener('click', changeBoxColor);
document.getElementById("J8s").addEventListener('click', changeBoxColor);
document.getElementById("J7s").addEventListener('click', changeBoxColor);
document.getElementById("J6s").addEventListener('click', changeBoxColor);
document.getElementById("J5s").addEventListener('click', changeBoxColor);
document.getElementById("J4s").addEventListener('click', changeBoxColor);
document.getElementById("J3s").addEventListener('click', changeBoxColor);
document.getElementById("J2s").addEventListener('click', changeBoxColor);

document.getElementById("T9s").addEventListener('click', changeBoxColor);
document.getElementById("T8s").addEventListener('click', changeBoxColor);
document.getElementById("T7s").addEventListener('click', changeBoxColor);
document.getElementById("T6s").addEventListener('click', changeBoxColor);
document.getElementById("T5s").addEventListener('click', changeBoxColor);
document.getElementById("T4s").addEventListener('click', changeBoxColor);
document.getElementById("T3s").addEventListener('click', changeBoxColor);
document.getElementById("T2s").addEventListener('click', changeBoxColor);

document.getElementById("98s").addEventListener('click', changeBoxColor);
document.getElementById("97s").addEventListener('click', changeBoxColor);
document.getElementById("96s").addEventListener('click', changeBoxColor);
document.getElementById("95s").addEventListener('click', changeBoxColor);
document.getElementById("94s").addEventListener('click', changeBoxColor);
document.getElementById("93s").addEventListener('click', changeBoxColor);
document.getElementById("92s").addEventListener('click', changeBoxColor);

document.getElementById("87s").addEventListener('click', changeBoxColor);
document.getElementById("86s").addEventListener('click', changeBoxColor);
document.getElementById("85s").addEventListener('click', changeBoxColor);
document.getElementById("84s").addEventListener('click', changeBoxColor);
document.getElementById("83s").addEventListener('click', changeBoxColor);
document.getElementById("82s").addEventListener('click', changeBoxColor);

document.getElementById("76s").addEventListener('click', changeBoxColor);
document.getElementById("75s").addEventListener('click', changeBoxColor);
document.getElementById("74s").addEventListener('click', changeBoxColor);
document.getElementById("73s").addEventListener('click', changeBoxColor);
document.getElementById("72s").addEventListener('click', changeBoxColor);

document.getElementById("65s").addEventListener('click', changeBoxColor);
document.getElementById("64s").addEventListener('click', changeBoxColor);
document.getElementById("63s").addEventListener('click', changeBoxColor);
document.getElementById("62s").addEventListener('click', changeBoxColor);

document.getElementById("54s").addEventListener('click', changeBoxColor);
document.getElementById("53s").addEventListener('click', changeBoxColor);
document.getElementById("52s").addEventListener('click', changeBoxColor);

document.getElementById("43s").addEventListener('click', changeBoxColor);
document.getElementById("42s").addEventListener('click', changeBoxColor);

document.getElementById("32s").addEventListener('click', changeBoxColor);

//Unsuited
document.getElementById("AK").addEventListener('click', changeBoxColor);
document.getElementById("AQ").addEventListener('click', changeBoxColor);
document.getElementById("AJ").addEventListener('click', changeBoxColor);
document.getElementById("AT").addEventListener('click', changeBoxColor);
document.getElementById("A9").addEventListener('click', changeBoxColor);
document.getElementById("A8").addEventListener('click', changeBoxColor);
document.getElementById("A7").addEventListener('click', changeBoxColor);
document.getElementById("A6").addEventListener('click', changeBoxColor);
document.getElementById("A5").addEventListener('click', changeBoxColor);
document.getElementById("A4").addEventListener('click', changeBoxColor);
document.getElementById("A3").addEventListener('click', changeBoxColor);
document.getElementById("A2").addEventListener('click', changeBoxColor);

document.getElementById("KQ").addEventListener('click', changeBoxColor);
document.getElementById("KJ").addEventListener('click', changeBoxColor);
document.getElementById("KT").addEventListener('click', changeBoxColor);
document.getElementById("K9").addEventListener('click', changeBoxColor);
document.getElementById("K8").addEventListener('click', changeBoxColor);
document.getElementById("K7").addEventListener('click', changeBoxColor);
document.getElementById("K6").addEventListener('click', changeBoxColor);
document.getElementById("K5").addEventListener('click', changeBoxColor);
document.getElementById("K4").addEventListener('click', changeBoxColor);
document.getElementById("K3").addEventListener('click', changeBoxColor);
document.getElementById("K2").addEventListener('click', changeBoxColor);

document.getElementById("QJ").addEventListener('click', changeBoxColor);
document.getElementById("QT").addEventListener('click', changeBoxColor);
document.getElementById("Q9").addEventListener('click', changeBoxColor);
document.getElementById("Q8").addEventListener('click', changeBoxColor);
document.getElementById("Q7").addEventListener('click', changeBoxColor);
document.getElementById("Q6").addEventListener('click', changeBoxColor);
document.getElementById("Q5").addEventListener('click', changeBoxColor);
document.getElementById("Q4").addEventListener('click', changeBoxColor);
document.getElementById("Q3").addEventListener('click', changeBoxColor);
document.getElementById("Q2").addEventListener('click', changeBoxColor);

document.getElementById("JT").addEventListener('click', changeBoxColor);
document.getElementById("J9").addEventListener('click', changeBoxColor);
document.getElementById("J8").addEventListener('click', changeBoxColor);
document.getElementById("J7").addEventListener('click', changeBoxColor);
document.getElementById("J6").addEventListener('click', changeBoxColor);
document.getElementById("J5").addEventListener('click', changeBoxColor);
document.getElementById("J4").addEventListener('click', changeBoxColor);
document.getElementById("J3").addEventListener('click', changeBoxColor);
document.getElementById("J2").addEventListener('click', changeBoxColor);

document.getElementById("T9").addEventListener('click', changeBoxColor);
document.getElementById("T8").addEventListener('click', changeBoxColor);
document.getElementById("T7").addEventListener('click', changeBoxColor);
document.getElementById("T6").addEventListener('click', changeBoxColor);
document.getElementById("T5").addEventListener('click', changeBoxColor);
document.getElementById("T4").addEventListener('click', changeBoxColor);
document.getElementById("T3").addEventListener('click', changeBoxColor);
document.getElementById("T2").addEventListener('click', changeBoxColor);

document.getElementById("98").addEventListener('click', changeBoxColor);
document.getElementById("97").addEventListener('click', changeBoxColor);
document.getElementById("96").addEventListener('click', changeBoxColor);
document.getElementById("95").addEventListener('click', changeBoxColor);
document.getElementById("94").addEventListener('click', changeBoxColor);
document.getElementById("93").addEventListener('click', changeBoxColor);
document.getElementById("92").addEventListener('click', changeBoxColor);

document.getElementById("87").addEventListener('click', changeBoxColor);
document.getElementById("86").addEventListener('click', changeBoxColor);
document.getElementById("85").addEventListener('click', changeBoxColor);
document.getElementById("84").addEventListener('click', changeBoxColor);
document.getElementById("83").addEventListener('click', changeBoxColor);
document.getElementById("82").addEventListener('click', changeBoxColor);

document.getElementById("76").addEventListener('click', changeBoxColor);
document.getElementById("75").addEventListener('click', changeBoxColor);
document.getElementById("74").addEventListener('click', changeBoxColor);
document.getElementById("73").addEventListener('click', changeBoxColor);
document.getElementById("72").addEventListener('click', changeBoxColor);

document.getElementById("65").addEventListener('click', changeBoxColor);
document.getElementById("64").addEventListener('click', changeBoxColor);
document.getElementById("63").addEventListener('click', changeBoxColor);
document.getElementById("62").addEventListener('click', changeBoxColor);

document.getElementById("54").addEventListener('click', changeBoxColor);
document.getElementById("53").addEventListener('click', changeBoxColor);
document.getElementById("52").addEventListener('click', changeBoxColor);

document.getElementById("43").addEventListener('click', changeBoxColor);
document.getElementById("42").addEventListener('click', changeBoxColor);

document.getElementById("32").addEventListener('click', changeBoxColor);
