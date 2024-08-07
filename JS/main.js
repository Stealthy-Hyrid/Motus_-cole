import { generateWord, retrieveWord } from "./generate_word.js";
import { resetLevel, startLevel } from "./level.js";
import { checkAnswer } from "./trial.js";
import {getClass,getId,getSessionItem,setSessionItem,setCookie, eraseCookie} from "./global_function.js";

/// Récupérer le mot au chargement
window.addEventListener("load", (event) => {
  retrieveWord();
  getId("letter_input0").focus();
});

/// Commencer le jeu
getId("game_start_btn").addEventListener("click", () => {
  startLevel();
});

/// Réinitialiser à 0
getId("game_reset_btn").addEventListener("click", resetLevel);

/// Comparaison entre le mot et les réponses données
getId("compare").addEventListener("click", checkAnswer);
