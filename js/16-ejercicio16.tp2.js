/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let cadena = prompt("Ingresá un texto:");
let numchar = cadena.length;
let j;
let car;
let salida = "";
for (j = 0; j < numchar; j++) {
  car = cadena.charAt(j);
  salida = car + salida;
}
document.write(salida);
