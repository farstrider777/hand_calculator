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

const equilab = ["AA","KK","AKs","QQ","AK","JJ","AQs","TT","AQ","99","AJs","88","ATs",
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
                        "83","42s","82","73","53","63","32s","43","72","52","62","42","32"];
const statRange =

["AA","KK","QQ","JJ","AKs","AQs","TT","AK","AJs","KQs","99","ATs","AQ","KJs","88","QJs","KTs","A9s",
 "AJ","QTs","KQ","77","A8s","K9s","AT","A5s","A7s","KJ","66","T9s","A4s","Q9s","J9s","QJ","A6s","55",
 "A3s","K8s","KT","98s","T8s","K7s","A2s","87s","QT","Q8s","44","A9","J8s","76s","JT","97s","K6s","K5s",
 "K4s","T7s","Q7s"];


 // K9	-0.07	1,045,630
 // 65s	-0.07	348,590
 // T9	-0.07	1,045,306
 // 86s	-0.07	348,374
 // A8	-0.07	1,042,209
 // J7s	-0.07	345,009
 // 33	-0.07	522,632
 // 54s	-0.08	348,260
 // Q6s	-0.08	349,068
 // K3s	-0.08	348,865
 // Q9	-0.08	1,049,468
 // 75s	-0.09	349,781
 // 22	-0.09	524,131
 // J9	-0.09	1,044,150
 // 64s	-0.09	349,689
 // Q5s	-0.09	350,110
 // K2s	-0.09	349,276
 // 96s	-0.09	349,514
 // Q3s	-0.10	348,009
 // J8	-0.10	1,046,506
 // 98	-0.10	1,044,759
 // T8	-0.10	1,048,779
 // 97	-0.10	1,046,152
 // A7	-0.10	1,046,587
 // T7	-0.10	1,044,950
 // Q4s	-0.10	348,979
 // Q8	-0.11	1,048,251
 // J5s	-0.11	348,923
 // T6	-0.11	1,043,014
 // 75	-0.11	1,047,447
 // J4s	-0.11	347,508
 // 74s	-0.11	350,325
 // K8	-0.11	1,048,167
 // 86	-0.11	1,047,524
 // 53s	-0.11	346,930
 // K7	-0.11	1,043,698
 // 63s	-0.11	346,449
 // J6s	-0.11	347,570
 // 85	-0.11	1,048,159
 // T6s	-0.11	348,875
 // 76	-0.11	1,046,722
 // A6	-0.12	1,046,762
 // T2	-0.12	1,047,032
 // 95s	-0.12	348,477
 // 84	-0.12	1,046,266
 // 62	-0.12	1,049,495
 // T5s	-0.12	348,928
 // 95	-0.12	1,044,601
 // A5	-0.12	1,046,285
 // Q7	-0.12	1,046,099
 // T5	-0.12	1,048,428
 // 87	-0.12	1,044,635
 // 83	-0.12	1,048,550
 // 65	-0.12	1,045,971
 // Q2 s	-0.12	348,912
 // 94	-0.12	1,047,422
 // Cards	EV	Count
 // 74	-0.12	1,043,278
 // 54	-0.12	1,046,435
 // A4	-0.12	1,046,931
 // T4	-0.12	1,047,976
 // 82	-0.12	1,043,638
 // 64	-0.12	1,043,079
 // 42	-0.12	1,043,357
 // J7	-0.12	1,046,565
 // 93	-0.12	1,045,989
 // 85 s	-0.12	347,928
 // 73	-0.12	1,047,020
 // 53	-0.12	1,047,022
 // T3	-0.12	1,043,908
 // 63	-0.12	1,044,818
 // K6	-0.12	1,045,039
 // J6	-0.12	1,045,991
 // 96	-0.12	1,047,156
 // 92	-0.12	1,049,342
 // 72	-0.12	1,046,167
 // 52	-0.12	1,049,213
 // Q4	-0.13	1,045,087
 // K5	-0.13	1,047,359
 // J5	-0.13	1,047,697
 // 43 s	-0.13	348,802
 // Q3	-0.13	1,047,649
 // 43	-0.13	1,047,900
 // K4	-0.13	1,046,562
 // J4	-0.13	1,048,129
 // T4 s	-0.13	350,639
 // Q6	-0.13	1,046,958
 // Q2	-0.13	1,046,353
 // J3 s	-0.13	349,254
 // J3	-0.13	1,046,204
 // T3 s	-0.13	349,673
 // A3	-0.13	1,046,970
 // Q5	-0.13	1,047,946
 // J2	-0.13	1,045,715
 // 84 s	-0.13	349,390
 // 82 s	-0.14	348,622
 // 42 s	-0.14	350,591
 // 93 s	-0.14	348,835
 // 73 s	-0.14	349,007
 // K3	-0.14	1,045,968
 // J2 s	-0.14	348,259
 // 92 s	-0.14	347,868
 // 52 s	-0.14	348,401
 // K2	-0.14	1,048,521
 // T2 s	-0.14	349,612
 // 62 s	-0.14	348,033
 // 32	-0.14	1,044,956
 // A2	-0.15	1,047,979
 // 83 s	-0.15	349,355
 // 94 s	-0.15	348,259
 // 72 s	-0.15	348,368
 // 32 s	-0.15	349,794

const vsRandom = [{hand: "AA", beatsRandom: 85.20},{hand: "KK", beatsRandom: 82.40},
{hand:"QQ", beatsRandom: 79.92},{hand:"QQ", beatsRandom: 79.92},{hand:"JJ", beatsRandom: 77.47},
{hand:"TT", beatsRandom: 75.01},{hand:"99", beatsRandom: 72.06},{hand:"88", beatsRandom: 69.16},
{hand:"AKs", beatsRandom: 67.04},{hand:"77", beatsRandom: 66.24},{hand:"AQs", beatsRandom: 66.21},
{hand:"AJs", beatsRandom: 65.39},{hand:"AK", beatsRandom: 65.32},{hand:"ATs", beatsRandom: 64.60},
{hand:"AQ", beatsRandom: 64.43},{hand:"AJ", beatsRandom: 63.56},{hand:"KQs", beatsRandom: 63.40},
{hand:"66", beatsRandom: 63.28},
{hand:"A9s", beatsRandom: 62.78},{hand:"AT", beatsRandom: 62.72},{hand:"KJs", beatsRandom: 62.57},
{hand:"A8s", beatsRandom: 61.94},{hand:"KTs", beatsRandom: 61.79},
{hand:"A9", beatsRandom: 60.77},{hand:"55", beatsRandom: 60.32},
{hand:"K9s", beatsRandom: 59.99},{hand:"A8o", beatsRandom: 59.87},
];


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

// blind level slider 3
var slider3 = document.getElementById("thirdRange");
var output3 = document.getElementById("thirdValue");
output3.innerHTML = slider3.value; // Display the default slider value

// Update the current slider2 value (each time you drag the slider handle)
slider3.oninput = function() {
    output3.innerHTML = this.value;
    changeBlindLevel(this.value);
}

var blindLevel = 0;

function changeBlindLevel(newPercentage){
  console.log(newPercentage)
  if (newPercentage == 0){
    output3.innerHTML = "10/20";
    blindLevel = 20;
  }else if(newPercentage == 1){
    output3.innerHTML = "20/40";
    blindLevel = 40;
  }else if(newPercentage == 2){
    output3.innerHTML = "30/60";
    blindLevel = 60;
  }else if(newPercentage == 3){
    output3.innerHTML = "40/80";
    blindLevel = 80;
  }else if(newPercentage == 4){
    output3.innerHTML = "50/100";
    blindLevel = 100;
  }else if(newPercentage == 5){
    output3.innerHTML = "75/150";
    blindLevel = 150;
  }else if(newPercentage == 6){
    output3.innerHTML = "100/200 + 20 ante";
    blindLevel = 200;
  }else if(newPercentage == 7){
    output3.innerHTML = "125/250 + 25 ante";
    blindLevel = 250;
  }else if(newPercentage == 8){
    output3.innerHTML = "150/300 + 30 ante";
    blindLevel = 300;
  }else if(newPercentage == 9){
    output3.innerHTML = "200/400 + 40 ante";
    blindLevel = 400;
  }else if(newPercentage == 10){
    output3.innerHTML = "250/500 + 50 ante";
    blindLevel = 500;
  }else if(newPercentage == 11){
    output3.innerHTML = "300/600 + 60 ante";
    blindLevel = 600;
  }else if(newPercentage == 12){
    output3.innerHTML = "400/800 + 80 ante";
    blindLevel = 750;
  }else if(newPercentage == 13){
    output3.innerHTML = "500/1000 + 100 ante";
    blindLevel = 1000;
  }else if(newPercentage == 15){
    output3.innerHTML = "600/1200 + 120 ante";
    blindLevel = 1200;
  }else if(newPercentage == 16){
    output3.innerHTML = "750/1500 + 150 ante";
    blindLevel = 1500;
  }else if(newPercentage == 17){
    output3.innerHTML = "800/1600 + 160 ante";
    blindLevel = 1600;
  }else if(newPercentage == 18){
    output3.innerHTML = "1000/2000 + 200 ante";
    blindLevel = 2000;
  }else if(newPercentage == 19){
    output3.innerHTML = "1250/2500 + 250 ante";
    blindLevel = 2500;
  }
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

//-----------------simple calc code------------------
var numOne = document.getElementById("value-one");
var numTwo = document.getElementById("value-two");
var calButton = document.getElementById("cal-butt");
var resultsDiv = document.getElementById("answer");

function add(){

  var i = (Number(numOne.value) / (Number(numTwo.value) + Number(numOne.value)))

  resultsDiv.innerHTML = i;
}

calButton.addEventListener('click', add);
//-----------------simple calc code2------------------
var numOne2 = document.getElementById("value-one2");
var numTwo2 = document.getElementById("value-two2");
var calButton2 = document.getElementById("cal-butt2");
var resultsDiv2 = document.getElementById("answer2");
var subtractBlindButton = document.getElementById("subtract-blind-button")
var subtractSmallBlindButton = document.getElementById("subtract-small-blind-button")
var subtractAnteButton = document.getElementById("subtract-ante-button")

function add2(){

  var i = (numOne2.value / blindLevel)
  resultsDiv2.innerHTML = i;
  numOne.value = numOne2.value;
}

function subtractBlind(){
  numOne2.value = Number(numOne2.value) - blindLevel
  add2();
}

function subtractSmallBlind(){
  numOne2.value = Number(numOne2.value) - blindLevel / 2
  add2();
}

function subtractAnte(){
  numOne2.value = Number(numOne2.value) - blindLevel / 10
  add2();
}

calButton2.addEventListener('click', add2);
subtractBlindButton.addEventListener('click',  subtractBlind)
subtractSmallBlindButton.addEventListener('click',  subtractSmallBlind)
subtractAnteButton.addEventListener('click',  subtractAnte)
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
