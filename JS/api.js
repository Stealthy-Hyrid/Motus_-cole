// On fait une requête API pour prévoirla fin de la liste de mot
fetch("https://trouve-mot.fr/api/random/1")
    .then((response) => response.json())
    .then((words) => window.sessionStorage.setItem("api_word", words[0].name))

export let api_word = window.sessionStorage.getItem("api_word");
