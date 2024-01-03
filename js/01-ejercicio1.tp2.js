const  edad = parseInt(prompt('Ingrese su edad'))
if (edad >= 18 && edad <= 65) {
    alert("Puede adquierir un permiso para conducir");
  } else if (edad < 18) {
    alert("Eres menor de edad, no puedes solicitar un permiso para conducir");
  } else {
    alert("No puede conducir");
  }
  