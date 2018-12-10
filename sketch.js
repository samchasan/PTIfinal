let colors = []
let red, orange, yellow, lime, seafoam, cyan, sky, royal;

function setup() {
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
}


$(document).on('input', '#question1', function(){getRange('#range1','#question1')});

$(document).on('input', '#question2', function(){getRange('#range2','#question2')});

$(document).on('input', '#question3', function(){getRange('#range3','#question3')});

$(document).on('input', '#question4', function(){getRange('#range4','#question4')});

$(document).on('input', '#question5', function(){getRange('#range5','#question5')});

$(document).on('input', '#question6', function(){getRange('#range6','#question6')});

$(document).on('input', '#question7', function(){getRange('#range7','#question7')});

$(document).on('input', '#question8', function(){getRange('#range8','#question8')});



function getRange(range, question) {
  var val = $(range).val();
  $(question).css("background-color", colors[val]);
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
