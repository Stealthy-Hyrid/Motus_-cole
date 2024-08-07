import words from './words.json' with {type:'json'};
import { getSessionItem, setSessionItem, setCookie, eraseCookie, getClass } from './global_function.js';
import { api_word } from './api.js';

const row_1_letter = getClass("row_1_letter")


export function generateWord() {
let current_level = parseInt(window.sessionStorage.getItem("level"));
let new_word;

// On vérifie si on est arrivé à la fin de la liste de mot
if (current_level <= 6) {
new_word = words[current_level].word;

// Si on arrive à la fin de la liste de mot, on récupère un mot au hazard via une requete API
} else {
    new_word = api_word
}

// On sauvegarde le mot dans la session pour y accéder au rafraichissement
setSessionItem("current_word", new_word);

// On sauvegarde la longueur du mot dans un cookie afin d'y accéder via php
    eraseCookie("length");
    setCookie("length",new_word.length.toString(),7);
}

export function retrieveWord() {

    // Récupérer le mot et sa valeur
        let current_word = getSessionItem("current_word");
        row_1_letter[0].innerHTML = current_word.charAt(0).toUpperCase();
        

    // Test    
    /*let length = parseInt(current_word.length);
     
        for (let i = 0; i < length; i++) {
            
            row_1_letter[i].innerHTML = current_word.charAt(i).toUpperCase();

            
            } */
    
    }