import words from './words.json' with {type:'json'};
import { setCookie, eraseCookie } from "./cookie.js";
import { triggerLevel } from './level.js';
import { api_word } from './api.js';
import { getSessionItem, setSessionItem } from './global_function.js';

const row_1_letter = document.getElementsByClassName("row_1_letter")


export function generateWord() {
    let current_level = parseInt(window.sessionStorage.getItem("level"));
let new_word = "";

// On lie le compte à l'indexion du fichier json pour récuperer un mot
if (current_level <= 6) {
new_word = words[current_level].word;

// Si on arrive à la fin de la liste de mot, on récupère la requete API
} else {
    fetch("https://trouve-mot.fr/api/random/1")
    .then((response) => response.json())
    .then((words) => setSessionItem("api_word", words[0].name))

    new_word = getSessionItem("api_word");

}

// On sauvegarde le mot dans la session pour y accéder au rafraichissement
window.sessionStorage.setItem("current_word", new_word);

// On sauvegarde la longueur du mot dans un cookie 
    eraseCookie("length");
    setCookie("length",new_word.length.toString(),7);
}

export function getWord() {

    // On commence le décompte
    triggerLevel();
    
    // On récupère un mot
    generateWord();
    
    // On rafraichit la page pour le php
        window.location.reload(true);
        
        }
    

export function retrieveWord() {
    // Récupérer le mot et sa valeur
    if (getSessionItem("current_word")) {

        let current_word = sessionStorage.getItem("current_word");
        row_1_letter[0].innerHTML = current_word.charAt(0).toUpperCase();
    }
        
    /*let length = parseInt(current_word.length);
     
        for (let i = 0; i < length; i++) {
            
            row_1_letter[i].innerHTML = current_word.charAt(i).toUpperCase();
           
            
            
            } */
    
    }
