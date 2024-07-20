import words from './words.json' with {type:'json'};
import { setCookie, eraseCookie } from "./cookie.js";
import { triggerCount } from './count.js';
import { api_word } from './api.js';

const row_1_letter = document.getElementsByClassName("row_1_letter")


export function generateWord() {
    let current_count = parseInt(window.sessionStorage.getItem("word_count"));
let new_word = "";

// On lie le compte à l'indexion du fichier json pour récuperer un mot
if (current_count <= 6) {
new_word = words[current_count].word;

// Si on arrive à la fin de la liste de mot, on récupère la requete API
} else {
new_word = api_word
}

// On sauvegarde le mot dans la session pour y accéder au rafraichissement
window.sessionStorage.setItem("current_word", new_word);

// On sauvegarde la longueur du mot dans un cookie 
    eraseCookie("length");
    setCookie("length",new_word.length.toString(),7);
}

export function getWord() {

    // On commence le décompte
    triggerCount();
    
    // On récupère un mot
    generateWord();
    
    // On rafraichit la page pour le php
        window.location.reload(true);
        
        }
    

export function retrieveWord() {

    if (sessionStorage.getItem("current_word") !== null) {

    // Récupérer le mot et sa valeur
    let current_word = sessionStorage.getItem("current_word");
        let length = parseInt(current_word.length);
     
        for (let i = 0; i < length; i++) {

            row_1_letter[i].innerHTML = current_word.charAt(i).toUpperCase();
           
            
            
            }
    }
    }
