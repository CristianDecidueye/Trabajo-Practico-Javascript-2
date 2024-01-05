/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
66666m
…….
*/

let i, rep;
for (m = 1; m <= 30; m++) {
  for (rep = 0; rep < m; rep++) {
    document.write(m);
  }
  document.write("<br>");
}
