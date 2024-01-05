/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;
cadena = cadena.toUpperCase();
let carm;
let contador = 0;
let m;
for (m = 0; m < numchar; m++) {
  car = cadena.charAt(m);
  if (car == "A" || car == "E" || car == "I" || car == "O" || car == "U") {
    contador++;
  }
}
document.write("Número de Vocales: " + contador + ".");
