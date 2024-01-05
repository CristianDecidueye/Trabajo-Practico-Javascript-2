/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/
const numrep = prompt("Introduce numero de repeticiones");

if (Number(numrep) == numrep) {
  if (numrep > 0 && numrep <= 50) {
    let rep, m;

    for (m = 0; m <= numrep; m++) {
      for (rep = 1; rep <= m; rep++) {
        document.write(rep);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
} else {
  alert("No has introducido un número");
}
