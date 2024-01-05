/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18 && edad <= 65) {
  alert("Puede adquierir un permiso para conducir");
} else if (edad < 18) {
  alert("Eres menor de edad, no puedes solicitar un permiso para conducir");
} else {
  alert("No puede conducir");
}
