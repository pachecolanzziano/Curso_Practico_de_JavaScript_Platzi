//clase 3 video - 12
// Capturamos los datos de los selectores
const h1 = document.querySelector('h1');
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const Calcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');
// funcion btnOnClick que imprime el resultado de la suma de los dos valores dados en los input
//podemos usar el parseInt() ó Number() para convertir el dato de string a numerico
function btnOnClick(){
resultado.innerText = parseInt(valor1.value) + parseInt(valor2.value);
}