class Circulo{
  constructor(punto,radio) {
    this.punto = punto;
    this.radio = radio;
  }
  distanciaCentro(otroCirculo){
    
    let distancia1= Number((this.punto.posX-otroCirculo.punto.posX)**2);
    console.log(distancia1)
    let distancia2=Number((this.punto.posY-otroCirculo.punto.posY)**2);
    
    let disCentro= Math.sqrt(distancia1+distancia2);
    return disCentro;
   }
 
 circulosIguales(otraposicionX,otraposicionY,otroRadio){
  let resultado;
  if (this.punto.posX==otraposicionX && this.punto.posY==otraposicionY && this.radio==otroRadio){
    resultado= true;

  }else{
    resultado= false;
  }
  return resultado;
 }
 mismoRadio(otroRadio){
  let resultado;
  if (this.radio==otroRadio){
    resultado= true;

  }else{
    resultado= false;
  }
  return resultado;
 }

 sonSecantes(otroCirculo){

  let distancia= this.distanciaCentro(otroCirculo).toFixed(2);
  let radioSuma= Number(this.radio+otroCirculo.radio);
  console.log("suma de radios",radioSuma)
  let resultado;
  console.log((distancia<radioSuma)? "true": "false");
  if (distancia<radioSuma){
    resultado= true;
  }else{
    resultado= false;
  };
 }
 

 tangentes(otroCirculo){
  let distancia= this.distanciaCentro(otroCirculo).toFixed(2)
  console.log("distancia tangente",distancia)
  let radioSuma= Number(this.radio+otroCirculo.radio);
  console.log("suma de radios",radioSuma)
  let resultado;
  console.log((distancia==radioSuma)? "true": "false");
  if (distancia<radioSuma){
    resultado= true;
  }else{
    resultado= false;
  }
 }

 seTocan(otroCirculo){
  let distancia= this.distanciaCentro(otroCirculo).toFixed(2)
  console.log("distancia tangente",distancia)
  let radioSuma= Number(this.radio+otroCirculo.radio);
  console.log("suma de radios",radioSuma)
  let resultado;
  console.log((distancia>radioSuma)? "true": "false");
  if (distancia<radioSuma){
    resultado= true;
  }else{
    resultado= false;
  }
 }

  toString() {
    let mostrar = `${this.puntoA} - ${this.puntoB}`;
    return mostrar;
  }
  
}

class Punto{
    constructor (posX, posY) {
      this.posX = posX;
      this.posY = posY;
    }

    

    toString() {
      return `(${this.posX},${this.posY})`;
    }
}

