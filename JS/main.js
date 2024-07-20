import { game_start_btn, game_reset_btn } from './game_start.js';
import { getWord, retrieveWord } from './generate_word.js';
import { resetCount } from './count.js';
import { trial, nextTrial  } from './trial.js';

game_start_btn.addEventListener('click', getWord);
game_reset_btn.addEventListener('click', () => {
    resetCount();
});

window.addEventListener("load", (event)=> {
    retrieveWord();
})

const test_btn = document.getElementById("trial");
test_btn.addEventListener('click', nextTrial);