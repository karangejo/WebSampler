var playBackRate = 1;

var sounds = document.querySelectorAll('.audios');
var input = document.getElementById('input1');
var buttons = document.querySelectorAll('.buttons');
//var slider = document.getElementById("myRange");
var radio = document.querySelectorAll('.radios');

console.log(typeof radio);
console.log(radio);

Object.keys(radio).map(function(keys){
  radio[keys].onchange = function(e){
    playBackRate = radio[keys].value
    console.log('playbackRate',playBackRate);
  }
});

Object.keys(buttons).map(function(keys){
  buttons[keys].style.textAlign= 'center';
})

console.log(typeof input1);
console.log('sounds: ',sounds);
console.log('inputs: ',input);
console.log('buttons: ',buttons);

input.onchange = function (e){
  console.log(this.files);
  console.log(typeof this.files);
  const fileNum = Object.keys(this.files).length;
  if(fileNum > 8){
    alert('Oops! You tried to upload too many files. Maximum is 8 files.');
    return;
  }
  for (var i = 0; i < fileNum; i++) {
    console.log(this.files[i]);
    sounds[i].src = URL.createObjectURL(this.files[i]);
  }
}

function playSound (index){
  sounds[index].load();
  sounds[index].playbackRate = playBackRate;
  sounds[index].play();
}

document.addEventListener("keydown", function (e){
  console.log(e);
  switch (e.key) {
    case 'a':
      playSound(0);
      break;
    case "s":
      playSound(1);
      break;
    case 'd':
      playSound(2);
      break;
    case 'f':
      playSound(3);
      break;
    case 'j':
      playSound(4);
      break;
    case 'k':
      playSound(5);
      break;
    case 'l':
      playSound(6);
      break;
    case ';':
      playSound(7);
      break;
    default:
      console.log(e.key);

  }

});

Object.keys(buttons).map(function(keys){
  buttons[keys].onclick = function(e){
    sounds[keys].load();
    sounds[index].playbackRate = playBackRate;
    sounds[keys].play();
  }
});
