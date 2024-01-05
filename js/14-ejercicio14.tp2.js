/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */
const cadena = prompt("Introduce una cadena de texto:");
const numchar = cadena.length;
let caracter;
let m;
for (m = 0; m < numchar; m++) {
  caracter = cadena.charAt(m);
  if (m == numchar - 1) {
    document.write(caracter);
  } else {
    document.write(caracter + "-");
  }
}
