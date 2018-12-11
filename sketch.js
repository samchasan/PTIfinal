let colors = []
let red, orange, yellow, lime, seafoam, cyan, sky, royal;
let noSleep = new NoSleep();
let answers = [];
let buttonClicked = false;
var real_color;
var real_number;

function setup() {
  colorMode(HSB,360,100,100)
  noCanvas()
  setColors()
}

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

////////////////////////////////////////////////////////////////////////////

function colorResponse(number) {
  $('#p1').css("display", "none");
  real_number = number - 1;
  real_color = answers[real_number].color;
  console.log("Color: " + answers[real_number].color);
  console.log(answers[real_number].answer);
  if (answers[real_number].answer == "yes") {
    if (real_color == 0) {
      $("body").css('background-color',red);
    }
    if (real_color == 1) {
      $("body").css('background-color',orange);
    }
    if (real_color == 2) {
      $("body").css('background-color',yellow);
    }
    if (real_color == 3) {
      $("body").css('background-color',lime);
    }
    if (real_color == 4) {
      $("body").css('background-color',seafoam);
    }
    if (real_color == 5) {
      $("body").css('background-color',cyan);
    }
    if (real_color == 6) {
      $("body").css('background-color',sky);
    }
    if (real_color == 7) {
      $("body").css('background-color',royal);
    }
  }
  else if (answers[real_number].answer == "no") {
    $("body").css('background-color','black');
  }
}

function allColors(number) {
  // real_number = number - 1;
  // console.log(answers[real_number].color);
  // real_color = answers[real_number].color;
  console.log("Color: " + answers[real_number].color);
  console.log(answers[real_number].answer);
    if (real_color == 0) {
      $("body").css('background-color',red);
    }
    if (real_color == 1) {
      $("body").css('background-color',orange);
    }
    if (real_color == 2) {
      $("body").css('background-color',yellow);
    }
    if (real_color == 3) {
      $("body").css('background-color',lime);
    }
    if (real_color == 4) {
      $("body").css('background-color',seafoam);
    }
    if (real_color == 5) {
      $("body").css('background-color',cyan);
    }
    if (real_color == 6) {
      $("body").css('background-color',sky);
    }
    if (real_color == 7) {
      $("body").css('background-color',royal);
    }

}

////////////////////////////////////////////////////////////////////////////

function getRange(range, question) {
  var val = $(range).val();
  $(question).css("background-color", colors[val]);
}

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
  noSleep.enable(); // keep the screen on!
  // console.log(answers)
  $("body").css('background-color','black');
}

function setColors (){
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
