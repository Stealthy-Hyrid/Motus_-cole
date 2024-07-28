import { game_start_btn, game_reset_btn } from "./game_start.js";
import { getWord, retrieveWord } from "./generate_word.js";
import { resetCount } from "./count.js";
import { trial, nextTrial } from "./trial.js";

/// Récupérer le mot au chargement
window.addEventListener("load", (event) => {
    retrieveWord();
  });

/// Générer un mot
game_start_btn.addEventListener("click", getWord);

/// Réinitialiser à 0
game_reset_btn.addEventListener("click",resetCount);


/// Nombre d'essaies
const trial_btn = document.getElementById("trial");
trial_btn.addEventListener("click", nextTrial);

/// Comparaison entre le mot et les réponses données
const compare_btn = document.getElementById("compare");
compare_btn.addEventListener("click", colorChange);

// On récupere chaque inputs et les place dans un tableau
const input_list = [];

for (let i = 0; i <= sessionStorage.getItem("current_word").length - 2; i++) {
  input_list.push(document.getElementById("letter_input" + i));
}

// On insère le mot dans un tableau
let word_check = sessionStorage.getItem("current_word").split("");
word_check.shift();

// On insère les valeurs données dans un tableau
 const input_check = [];

for (let i = 0; i < input_list.length; i++) {
  input_list[i].addEventListener("change", () => {
    input_check[i] = input_list[i].value;
    console.log(input_check);
  });
}

/// On compare les valeurs données à la bonne réponse et modifie l'affichage en fonction des resultats
function colorChange() {
    
    // On compare les valeurs
    const intersection = word_check.filter((element) =>
        input_check.includes(element)
      );
    
      // On affiche en vert si la lettre est bien placée, en orange si elle est mal placée
      for (let i = 0; i < intersection.length; i++) {
        if (
          input_check.indexOf(intersection[i]) ==
          word_check.indexOf(intersection[i])
        ) {
          document.getElementsByClassName(`row_${trial + 1}_letter`)[
            input_check.indexOf(intersection[i]) + 1
          ].style.background = "green";
        } else {
          document.getElementsByClassName(`row_${trial + 1}_letter`)[
            input_check.indexOf(intersection[i]) + 1
          ].style.background = "orange";
        }
      }
    
      // On affiche en rouge si la lettre n'est pas dans le mot
      for (let i = 0; i < input_check.length; i++) {
        if (!word_check.includes(input_check[i])) {
          document.getElementsByClassName(`row_${trial + 1}_letter`)[
            i + 1
          ].style.background = "red";
        }
      }
}
