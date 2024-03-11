let move_speed = 3;
let gravity = 0.5;
let bird = document.getElementsByClassName("bird");
let background = document.getElementsByClassName("background");
let pipes = document.getElementsByClassName("pipes");
window.addEventListener("click", fly)
function fly() {
    bird.className += " birdfly";
}