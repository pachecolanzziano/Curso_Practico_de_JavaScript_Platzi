//clase 1 video - 10
//leer elementos html con querySelector, querySelectorAll, getElementById, getElementsByClassName
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');
//obtener el valor del input
console.log(input.value)
//leer los elementos seleccionados
console.log(h1, p, parrafito, pid, input);
console.log({h1, p, parrafito, pid, input});
