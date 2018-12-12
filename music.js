let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;
let bass;

function loadSounds() {
  sound1 = loadSound('samples/sounds1.mp3');
  sound2 = loadSound('samples/sounds2.mp3')
  sound3 = loadSound('samples/sounds3.mp3');
  sound4 = loadSound('samples/sounds4.mp3');
  sound5 = loadSound('samples/sounds5.mp3');
  sound6 = loadSound('samples/sounds6.mp3');
  sound7 = loadSound('samples/sounds7.mp3')
  sound8 = loadSound('samples/sounds8.mp3')
  bass = loadSound('samples/bass.mp3')
}

function playNote(data){
  if (data == 1 ){
    sound1.play()
  }else if (data == 2 ){
    sound2.play()
  }else if (data == 3 ){
    sound3.play()
  }else if (data == 4 ){
    sound4.play()
  }else if (data == 5 ){
    sound5.play()
  }else if (data == 6 ){
    sound6.play()
  }else if (data == 7 ){
    sound7.play()
  }else if (data == bass ){
    bass.play()
  }
}
