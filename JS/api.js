import { getSessionItem, setSessionItem } from "./global_function.js";

fetch("https://trouve-mot.fr/api/random/1")
.then((response) => response.json())
.then((words) => setSessionItem("api_word", words[0].name))

export let api_word = getSessionItem("api_word");