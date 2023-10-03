function calcular() {
  let xA1 = parseFloat(document.getElementById("xA1").value);
  let yA1 = parseFloat(document.getElementById("yA1").value);

  let xB1 = parseFloat(document.getElementById("xB1").value);
  let yB1 = parseFloat(document.getElementById("yB1").value);

  let puntoA1 = new Punto(xA1, yA1);
  let puntoB1 = new Punto(xB1, yB1);
  let linea1 = new Linea (puntoA1, puntoB1);

  let xA2 = parseFloat(document.getElementById("xA2").value);
  let yA2 = parseFloat(document.getElementById("yA2").value);

  let xB2 = parseFloat(document.getElementById("xB2").value);
  let yB2 = parseFloat(document.getElementById("yB2").value);

  let puntoA2 = new Punto(xA2, yA2);
  let puntoB2 = new Punto(xB2, yB2);
  let linea2 = new Linea(puntoA2, puntoB2);

  document.getElementById("linea1").innerHTML = linea1;
  document.getElementById("pendiente1").innerHTML = linea1.pendiente().toFixed(2);
  document.getElementById("pend1posit").innerHTML = ((linea1.pendientePositiva()) ? "Sí" : "No");

  document.getElementById("linea2").innerHTML = linea2;
  document.getElementById("pendiente2").innerHTML = linea2.pendiente().toFixed(2);
  document.getElementById("pend2posit").innerHTML = ((linea2.pendientePositiva()) ? "Sí" : "No");

  document.getElementById("similares").innerHTML = ((linea1.pendienteSimilar(linea2)) ? "Si" : "No");

}