let colors = []
let red, orange, yellow, lime, seafoam, cyan, sky, royal;

function setup() {
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


let answers = []

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

  background(0)

  console.log(answers)
}
