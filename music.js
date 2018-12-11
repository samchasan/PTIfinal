let question1, question2, question3, question4, question5, question6, question7, question8;

function loadSounds() {
  question1 = loadSound('samples/stem1.mp3');
  question2 = loadSound('samples/stem2.mp3')
  question3 = loadSound('samples/stem3.mp3');
  question4 = loadSound('samples/stem4.mp3');
  question5 = loadSound('samples/stem5.mp3');
  question6 = loadSound('samples/stem6.mp3');
  question7 = loadSound('samples/stem7.mp3')
  question8 = loadSound('samples/stem8.mp3')
}

function playNote(data){
  if (data == 1 ){
    question1.loop()
  }else if (data == 2 ){
    question2.loop()
    question1.stop()
  }else if (data == 3 ){
    question3.loop()
    question2.stop()
  }else if (data == 4 ){
    question4.loop()
    question3.stop()
  }else if (data == 5 ){
    question5.loop()
    question4.stop()
  }else if (data == 6 ){
    question6.loop()
    question5.stop()
  }else if (data == 7 ){
    question7.loop()
    question6.stop()
  }else if (data == 8 ){
    question8.loop()
    question7.stop()
  }
}
