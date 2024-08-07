import words from './words.json' with {type:'json'};
import { generateWord } from './generate_word.js';
import { getSessionItem, setSessionItem } from './global_function.js';

// Création du level actuel
let level = 0;
let current_level = parseInt(getSessionItem("level"));

if (getSessionItem("level") === null) {
  setSessionItem("level", level);
}

// Incrémentation et sauvegarde du level dans la session pour y accéder au rafraichissement
export function setLevel() {
  
  if (current_level >= 0) {
    let next_level = current_level + 1;
    setSessionItem("level", next_level);
  }  
}

// Reset complet du jeu
export function resetLevel() {
    level = 0
    setSessionItem("level", level);   
    generateWord();
    window.location.reload(true);
}

// Commencer le niveau
export function startLevel() {

  // On commence le niveau
  setLevel();
  
  // On récupère un mot
  generateWord();
  
  // On rafraichit la page pour actualiser le php
      window.location.reload(true);
      
      }
  