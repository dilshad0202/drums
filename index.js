// var  drums = document.querySelectorAll("button");
// var audio;

// for(i=0;i<= drums.length;i++){
//     drums[i].addEventListener("click",handleListener)
// }

// function handleListener(){
//     audio =   Audio('sounds/tom-4.mp3');
//     audio.play();

// }

var drums = document.querySelectorAll("button");
var audio;

document.addEventListener("keypress", function (eventt) {
  handleListener(eventt.key);
});

for (i = 0; i <= drums.length; i++) {
  drums[i].addEventListener("click", function () {
    handleListener(this.innerHTML);
  });
}

function handleListener(event) {
  switch (event) {
    case "w":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;

    default:
      console.log("no button" + value);
  }
  audio.play();
  buttonAnimation(event);
}

function buttonAnimation(currentkey) {
  var button = document.querySelector("." + currentkey);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  },100);
}
