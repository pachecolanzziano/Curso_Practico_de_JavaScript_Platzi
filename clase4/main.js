//clase 4 video - 13
// Capturamos los datos de los selectores
const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const calcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

//addEventListener recibe dos elementos el evento y la funcion
formulario.addEventListener('submit', calcularSuma)
function calcularSuma(event){
    console.log({event});
    event.preventDefault();
  resultado.innerText = parseInt(valor1.value) + parseInt(valor2.value);
  }
  
  // con el button yel evento click
  // calcular.addEventListener('click', calcularSuma);
    // function calcularSuma(event){
  //   console.log({event});
  // resultado.innerText = parseInt(valor1.value) + parseInt(valor2.value);
// }