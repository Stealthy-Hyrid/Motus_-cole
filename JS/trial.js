import { getClass, getId, background, getSessionItem,setSessionItem, getCookie } from "./global_function.js";

// Essaie en cours
let trial = 0;


// On récupere chaque inputs et les place dans un tableau
 let input_list = [];
  
  for (let i = 0; i <= getSessionItem("current_word").length - 2; i++) {
    input_list.push(getId("letter_input" + i));
  }
  
  // On insère le mot dans un tableau
 let word_check = getSessionItem("current_word").split("");
  
// On créer un tableau pour y insérer les valeurs d'input
let input_check = [];

// On y insère la première lettre du mot
input_check.unshift(word_check[0]);

// On insère les valeurs des inputs dans le tableau
for (let i = 0; i < input_list.length; i++) {
  input_list[i].addEventListener("change", () => {
    input_check[i + 1] = input_list[i].value.toLowerCase();
  });
}


/// On réordonne les divs entre chaque essaies
function nextTrial() {
  switch (trial) {
    case 0:
      $("#row_1").insertAfter("#row_2");
      trial += 1;
      break;

    case 1:
      $("#row_1").insertAfter("#row_3");
      trial += 1;
      break;
    case 2:
      $("#row_1").insertAfter("#row_4");
      trial += 1;
      break;

    case 3:
      $("#row_1").insertAfter("#row_5");
      trial += 1;
      break;

    case 4:
      $("#row_1").insertAfter("#row_6");
      trial += 1;
      break;

    case 5:
      $("#row_1").insertAfter("#row_7");
      trial += 1;
      break;

    default:
  }

  getId("letter_input0").focus();
}

// On affiche les réponses précédentes
function insertPrevAnswer() {
  let prev_answer = [];

  for (let i = 0; i <= getSessionItem("current_word").length - 1; i++) {
    prev_answer.push(getClass(`row_${trial + 1}_letter`)[i]);
  }

  for (let i = 0; i < prev_answer.length; i++) {
    if(input_check[i] != undefined){
    prev_answer[i].innerHTML = input_check[i].toUpperCase();
  }
}
}
// On compare les réponses données aux réponses attendues et on modifie l'affichage
function colorChange(target) {
  for (let i = 1; i < word_check.length; i++) {
    // On identifie les cibles de changements
    let box;
    let input = getClass(`letter_input_container`)[i - 1];

    // On modidie la cible si on est au dernier essaie
    if (target == `row_${trial + 2}_letter`) {
      box = getClass(target)[i];
    } else {
      box = input;
    }

    // On vide la cible si on n'est pas au dernier essaie
    let deletePrevAnswer = () => {
      if (target == `row_${trial + 2}_letter`) {
        input_list[i - 1].value = "";
      }
    };

    // On compare les réponses données aux réponses attendues et modifie l'affichage en fonction
    if (word_check[i] == input_check[i]) {
      background(box, "green");
      background(input, "green");
    } else if (word_check.includes(input_check[i])) {
      background(input, "");
      background(box, "orange");
      deletePrevAnswer();
    } else {
      background(input, "");
      background(box, "red");
      deletePrevAnswer();
    }
  }
}

// On compare les réponses et on modifie l'affichage, affiche les réponses précedentes et passes à l'essaie suivant
export function checkAnswer() {
  if (trial < 6) {
    colorChange(`row_${trial + 2}_letter`);
    nextTrial();
    insertPrevAnswer();
  } else {
    colorChange(`letter_input_container`);
    getId("result").innerHTML = `La réponse était " ${sessionStorage.getItem(
      "current_word"
    )}"`;
  }
}
