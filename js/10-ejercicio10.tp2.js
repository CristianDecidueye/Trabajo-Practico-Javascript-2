/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
const filas = parseInt(prompt("Ingrese una cantidad de filas"));
const columnas = parseInt(prompt("Ingrese una cantidad de columnas"));

document.write(`<table>
<tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>`);

  document.write(`<tr>`);
  for (let indiceColumnas = 0; indiceColumnas < filas; indiceColumnas++) {
    document.write(`<td>1</td>`);
    document.write(`<td>2</td>`);
    document.write(`<td>3</td>`);
    document.write(`</tr>`);
  }
}

document.write(`</tbody></table>`);
