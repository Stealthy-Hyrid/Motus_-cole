import { generateWord, getWord, retrieveWord } from "./generate_word.js";
import { resetLevel } from "./level.js";
import { checkAnswer } from "./trial.js";
import { getClass, getId, getSessionItem, setSessionItem } from "./global_function.js";
/// Récupérer le mot au chargement
window.addEventListener("load", (event) => {
  retrieveWord();
  getId("letter_input0").focus();
});

// Commencer le jeu
getId("game_start_btn").addEventListener("click", () => {
  getWord();
});

/// Réinitialiser à 0
getId("game_reset_btn").addEventListener("click", resetLevel);

/// Comparaison entre le mot et les réponses données
getId("compare").addEventListener("click", checkAnswer);