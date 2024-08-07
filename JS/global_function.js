// Récupérer un élément via son id
export function getId(id) {
  return document.getElementById(id);
}

// Récupérer un élément via sa classe
export function getClass(className) {
  return document.getElementsByClassName(className);
}

// Modifier le background d'un element
export function background(target, color) {
  return (target.style.background = color);
}

// Récupérer une valeur dans la session
export function getSessionItem(key) {
  return sessionStorage.getItem(key);
}

// Sauvegarder une valeur dans la session
export function setSessionItem(key, value) {
  sessionStorage.setItem(key, value);
}


// Générer un cookie
export function setCookie(name,value,days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Suppression du cookie
export function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 2025 00:00:01 GMT;';
}
