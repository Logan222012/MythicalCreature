let move_speed = 3;
let gravity = 0.5;
let bird = document.getElementsByClassName("bird");
let background = document.getElementsByClassName("background");
let pipes = document.getElementsByClassName("pipes");
window.addEventListener("click", fly);
bird.onclick = function fly() {
    bird.className += "birdfly";
};
for (let i = 0;  i < 10; i++) {
   
    document.addEventListener("click", fly);
}