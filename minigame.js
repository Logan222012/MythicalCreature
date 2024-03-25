let move_speed = 3;
let gravity = 0.5;
let bird = document.querySelector(".bird");
let bird_hitbox = bird.getBoundingClientRect();
let background = document.querySelector(".background");
let background_hitbox = background.getBoundingClientRect();
let score = document.querySelector(".score");
let score_title = document.querySelector(".score_title");
let score_val = document.querySelector(".score_val");
let game_has_started = false;
document.addEventListener("keydown", (event) => {
    if(event.key == 'Enter' && game_has_started == false){
        document.querySelectorAll('.pipes').forEach((event) => {
            event.remove(); 
        });
      event.bird.top = '40vh';
      game_has_started = 'Play'
      message.innerHTML = '';
      score_title.innerHTML = 'Score : ';
      score_val.innerHTML = '0';
      play();
    }   
});
function play() {
    function move() {
        if (game_has_started != 'Play') return;
        let pipes = document.querySelectorAll('.pipes')
        pipes.forEach( (pipe) => {
            let pipes_hitbox = pipe.getBoundingClientRect();
            let bird_hitbox = bird.getBoundingClientRect(); 
            if (pipes_hitbox.right <= 0) {
            bird.remove();
            } else {
                if (
                    bird_hitbox.left < pipes_hitbox.left +
                    pipes_hitbox.width &&
                    bird_hitbox.left +
                    bird_hitbox.width < pipes_hitbox.left &&
                    bird_hitbox.top < pipes_hitbox.top +
                    pipes_hitbox.height &&
                    bird_hitbox.top +
                    bird_hitbox.top < pipes_hitbox.top
                ) {
                    game_has_started = 'End';
                    message.innerHTML = 'Press Enter To Restart';
                    message.style.left = '28vw';
                    return;
                } else {
                    if (
                        pipes_hitbox.right < bird_hitbox.left &&
                        pipes_hitbox.right + 
                        move_speed >= bird_hitbox.left &&
                        pipe.increase_score === '1'
                    ) {
                        score_val.innerHTML = +score_val.innerHTML + 1;
                    }
                    pipes.style.left
                }
            }
        });
          requestAnimationFrame(move);
    }
    requestAnimationFrame(move);
    let bird_dy = 0;
    function apply_gravity() {
        if (game_has_started != 'Play') return;
        bird_dy = bird_dy + gravity;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == '') {
                bird_dy = -7.6;
            }
        });
      if (bird_hitbox.top <= 0 || 
        bird_hitbox.bottom >= background.bottom) {
    game_has_started = 'End';
    message.innerHTML = 'Press Enter To Restart';
    message.style.left = '28vw';
    return;
        }
        bird.style.top = bird_hitbox.style.top + bird_dy + 'px';
        bird_hitbox = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);
    let pipe_separation = 0;
    let pipe_gap = 40;
    function create_pipe() {
        if (game_has_started !=  'Play') return;
        if (pipe_separation > 115) {
            pipe_separation 0;
        }
    }
}