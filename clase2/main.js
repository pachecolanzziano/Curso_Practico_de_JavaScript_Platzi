//clase 2 video - 11
//leer elementos html con querySelector, querySelectorAll, getElementById, getElementsByClassName
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

//innerHTML se modifica desde el DOM con formato html
h1.innerHTML = 'Patito <br> Feo'

//innerText se modifica desde DOM con formato de texto plano (ayuda a evitar la incrustacion de codigo malicioso)
h1.innerText = 'Patito <br> Feo'

//getAttribute obtiene el atributo clase del selector
console.log(h1.getAttribute('class'))

//setAttribute modifica el atributo clase al selector
h1.setAttribute('class', 'rojo')
console.log(h1.getAttribute('class'))

//classList.add adiciona una clase al selector
h1.classList.add('verde')
console.log(h1.getAttribute('class'))

//remueve una clase del Selector
h1.classList.remove('verde')
console.log(h1.getAttribute('class'))

//adiciona la clase (su uso es dado eventos ..proxima clase)
h1.classList.toggle('naranja')
console.log(h1.getAttribute('class'))

//devulve true o false si el selector contiene la clase que se le esta preguntando (proxima clase)
h1.classList.contains('rosado')

//dar un valorpor default a un input
input.value = '6789'

//crear un elementos html
const img = document.createElement('img')
img.setAttribute('src', 'https://static.jsbin.com/images/dave.min.svg')
img.setAttribute('width', '100')
  //mostrar la ruta
  console.log(img)
  //se limpiael contenido del selector
  pid.innerHTML = ''
  // se le da el contenido de la img
  pid.appendChild(img)
