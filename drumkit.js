var w = new Audio('sounds/snare.mp3');
var a = new Audio('sounds/tom-1.mp3');
var s = new Audio('sounds/tom-3.mp3');
var d = new Audio('sounds/kick-bass.mp3');
var j = new Audio('sounds/tom-4.mp3');
var k = new Audio('sounds/tom-2.mp3');
var l = new Audio('sounds/crash.mp3');

for(var i=0 ; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    clickHandler(event.target.innerHTML)});
}

document.addEventListener("keydown", function(event) {
    clickHandler(event.key);
});

function clickHandler(which_sound) {
//    console.log(which_sound)
//    alert("Clicked!"); 
    flashButton(which_sound);

    switch (which_sound){
    case "w":
        w.play();
        break;
    case "a":
        a.play();
        break;
    case "s":
        s.play();
        break;
    case "d":
        d.play();
        break;
    case "j":
        k.play();
        break;
    case "k":
        k.play();
        break;
    case "l":
        l.play();
        break;
    default:
        console.log(which_sound)
        break;
    }
}

function flashButton (whichFlash) {
    var activeButton = document.querySelector("."+whichFlash);
    activeButton.classList.add("pressed");
    setTimeout(function(){ activeButton.classList.remove("pressed"); },0.3);
}


