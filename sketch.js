let colors = []
let red, orange, yellow, lime, seafoam, cyan, sky, royal;
let noSleep = new NoSleep();

function setup() {
  frameRate(12);
  createCanvas(800,100)
  colorMode(HSB,360,100,100)
  red = color(14, 100, 90)
  orange = color(35, 100, 97)
  yellow = color(50, 100, 97)
  lime = color(80, 80, 93)
  seafoam = color(150, 65, 93)
  cyan = color(180, 85, 89)
  sky = color(209, 85, 100)
  royal = color(224, 87, 86)

  colors.push(red)
  colors.push(orange)
  colors.push(yellow)
  colors.push(lime)
  colors.push(seafoam)
  colors.push(cyan)
  colors.push(sky)
  colors.push(royal)
}


let buttonClicked = false;

function draw() {
  if (buttonClicked == true) {
    $('#questions').css("display", "none");
  }
  getRange("range1","#question1")
  getRange("range2","#question2")
  getRange("range3","#question3")
  getRange("range4","#question4")
  getRange("range5","#question5")
  getRange("range6","#question6")
  getRange("range7","#question7")
  getRange("range8","#question8")
}

function getRange(range,question) {
  let slider = document.getElementById(range).value;
  $(question).css("background-color", colors[slider]);
}

let answers = [];

function getVals(range,question) {
  let answer = document.getElementsByName(question)[0].checked
  let sliderVal = document.getElementById(range).value;

  if(answer){
    answer = "yes"
  } else {
    answer = "no"
  }

  let response = {
      "answer" : answer,
      "color" : sliderVal
    }

  answers.push(response)

}


function submitForm() {
  buttonClicked = true;
  getVals("range1","question1")
  getVals("range2","question2")
  getVals("range3","question3")
  getVals("range4","question4")
  getVals("range5","question5")
  getVals("range6","question6")
  getVals("range7","question7")
  getVals("range8","question8")
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  noSleep.enable(); // keep the screen on!
  console.log(answers)
}

function colorResponse(number) {
  $('#p1').css("display", "none");
  var real_number = number - 1;
  var real_color = answers[real_number].color;
  console.log("Color: " + answers[real_number].color);
  if (answers[real_number].answer == "yes") {
    if (real_color == 0) {

      background(red);
      console.log("Red");
    }
    if (real_color == 1) {
      background(orange);
      console.log("Orange");
    }
    }
    if (real_color == 2) {
      background(yellow);
      console.log('Yellow');
    }
    if (real_color == 3) {
      background(lime);
      console.log('Lime');
    }
    if (real_color == 4) {
      background(seafoam);
      console.log('Seafoam');
    }
    if (real_color == 5) {
      background(cyan);
      console.log('Cyan');
    }
    if (real_color == 6) {
      background(sky);
      console.log('Blue');
    }
    if (real_color == 7) {
      background(royal);
      console.log('Cyan');
    }

  }
