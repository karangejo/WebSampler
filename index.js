var playBackRate = 1;

var sounds = document.querySelectorAll('.audios');
var input = document.getElementById('input1');
var buttons = document.querySelectorAll('.buttons');
//var slider = document.getElementById("myRange");
var radio = document.querySelectorAll('.radios');
var hr = document.querySelectorAll('hr');
var div = document.getElementsByClassName('mycontainer');

console.log(div);

Object.keys(div).map(function(keys){
  div[keys].style.padding= "20px";
})

Object.keys(hr).map(function(keys){
  hr[keys].style.margin = "0";
  hr[keys].style.color="#8b104e"
})

Object.keys(radio).map(function(keys){
  radio[keys].style.position="relative";
  radio[keys].style.opacity="1";
  radio[keys].style.pointerEvents="auto";


  radio[keys].onchange = function(e){
    playBackRate = radio[keys].value
    console.log('playbackRate',playBackRate);
  }
});

Object.keys(buttons).map(function(keys){
  buttons[keys].style.textAlign= 'center';
  buttons[keys].className += " waves-effect waves-light btn";
  buttons[keys].style.backgroundColor = "#ff9900";
  buttons[keys].style.fontFamily = "Faster One";
  buttons[keys].style.color = "#8b104e";


})


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
