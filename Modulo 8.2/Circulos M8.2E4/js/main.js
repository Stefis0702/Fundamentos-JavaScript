function calcular() {
  let xA1 = parseInt(Number(document.getElementById("xA1").value));
  let yA1 = parseInt(Number(document.getElementById("yA1").value));

  let xB1 = parseInt(Number(document.getElementById("xA2").value));
  let yB1 = parseInt(Number(document.getElementById("yA2").value));

  let centro1 = new Punto(xA1, yA1);
  let radio1 = parseInt(Number(document.getElementById("xB1").value));
  let Circulo1 = new Circulo (centro1,radio1);

  let centro2 = new Punto(xB1, yB1);
  let radio2 = parseInt(Number(document.getElementById("xB2").value));
  let Circulo2 = new Circulo (centro2,radio2);


  document.getElementById("distancia").innerHTML = Circulo1.distanciaCentro(Circulo2).toFixed(2);
  document.getElementById("igual").innerHTML = ((Circulo1.circulosIguales(xB1,yB1,radio2))? "Si": "No");
  document.getElementById("radiom").innerHTML = ((Circulo1.mismoRadio(radio2))?"Si": "No");
  document.getElementById("tangente").innerHTML = (Circulo1.tangentes(Circulo2)? "true": "false");
  document.getElementById("secante").innerHTML = ((Circulo1.sonSecantes(Circulo1))? "Si": "No");
  document.getElementById("tocan").innerHTML = (Circulo1.seTocan(Circulo2)? "true": "false");

}