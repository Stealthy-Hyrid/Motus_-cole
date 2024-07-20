import words from './words.json' with {type:'json'};
import { generateWord } from './generate_word.js';

// Création et sauvegarde du compte actuel
let count = 0;
let current_count = parseInt(window.sessionStorage.getItem("word_count"));

if (window.sessionStorage.getItem("word_count") === null) {
  window.sessionStorage.setItem("word_count", count);
}

console.log(window.sessionStorage.getItem("word_count"));

// Incrémentation et sauvegarde du compte dans la session pour y accéder quand la page se rafraichit
export function triggerCount() {
  
  if (current_count >= 0  /* && current_count < 7*/) {
    let next_count = current_count + 1;
    window.sessionStorage.setItem("word_count", next_count);
  }  /*else if (current_count >= 7) {
        let count = 0;
        window.sessionStorage.setItem("word_count", count)
    }  */
}


export function resetCount() {
    count = 0
    window.sessionStorage.setItem("word_count", count);   
    generateWord();
    window.location.reload(true);
}