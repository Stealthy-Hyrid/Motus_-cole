export function getId(id) {
  return document.getElementById(id);
}

export function getClass(className) {
  return document.getElementsByClassName(className);
}

export function background(target, color) {
  return (target.style.background = color);
}

export function getSessionItem(key) {
  return sessionStorage.getItem(key);
}

export function setSessionItem(key, value) {
  sessionStorage.setItem(key, value);
}
