class Linea {
  constructor(puntoA, puntoB) {
    this.puntoA = puntoA;
    this.puntoB = puntoB;
  }

  getPuntoA() {
    return this.puntoA
  }
  getPuntoB() {
    return this.puntoB
  }

  setPuntoA(puntoA) {this.puntoA = puntoA;}
  setPuntoB(puntoB) {this.puntoB = puntoB;}

  pendiente() {
    let elevacion = this.puntoB.posY - this.puntoA.posY;
    let avance = this.puntoB.posX - this.puntoA.posX;
    let valorPendiente = (elevacion/avance);
    return valorPendiente;
  }

  pendientePositiva() {
    let esPositiva = (this.pendiente()>0) ? true : false;
    return esPositiva;
  }

  pendienteSimilar(otraLinea) {
    let elevacion = otraLinea.puntoB.posY - otraLinea.puntoA.posY;
    let avance = otraLinea.puntoB.posX - otraLinea.puntoA.posX;
    let valorPendiente = elevacion/avance;
    let esPositiva = (valorPendiente > 0) ? true : false;
    let similares = (this.pendientePositiva() == esPositiva) ? true : false;
    return similares;
  }

  toString() {
    let mostrar = `${this.puntoA} - ${this.puntoB}`;
    return mostrar;
  }
  
}

class Punto {
    constructor (posX, posY) {
      this.posX = posX;
      this.posY = posY;
    }

    getPosX() {return this.posX}
    getPosY() {return this.posY}
 
    setPosX(posX) {this.posX = posX;}
    setPosY(posY) {this.posY = posY;}

    toString() {
      return `(${this.posX},${this.posY})`;
    }
}

