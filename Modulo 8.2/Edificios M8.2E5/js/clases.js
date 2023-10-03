class Edificio {
  constructor(nombre, numeroPlantas, superficie) {
    this.nombre = nombre;
    this.numeroPlantas = numeroPlantas;
    this.superficie = superficie;

  }
  limpiarEdificio(edificio) {
    let tiempo = (this.superficie / 5);
    let subidaPlantas = ((this.numeroPlantas - 1) * 0.30);
    let tiempoTotal = (tiempo + subidaPlantas);
    let costoDiario = tiempoTotal;
    let costoMensual = (costoDiario * 30);
    const formateado = costoMensual.toLocaleString("es", {
      style: "currency",
      currency: "EUR"
    });
    return tiempoTotal + " minutos. El costo mensual de la limpieza seria de: " + formateado
  }

  calcularCosteVigilancia(Edificio) {
  
    let numVigilantes = Math.ceil(this.superficie / (Edificio === 'cine' ? 3000 : 1000));
    console.log(numVigilantes);
      
    let costoMensual = numVigilantes * 1300 + (Edificio === 'hotel' ? numVigilantes * 500 : 0);
      console.log(costoMensual);
     
    console.log("El costo de contratar vigilantes para este " + Edificio + " es de " + costoMensual + " euros al mes.");
    return "El número de vigilantes necesario son: " + numVigilantes + " y su salario seria de: " + costoMensual + " euros al mes."
    }


  toJS() {
    let mostrar = "";
    mostrar += "Nombre" + this.nombre + "\n";
    mostrar += "Numero Plantas: " + this.numeroPlantas + "\n";
    mostrar += "Superficie: " + this.superficie + "\n";
    mostrar += "El tiempo para realizar la limpieza del edificio es: " + this.limpiarEdificio() + "\n";
    mostrar += this.calcularCosteVigilancia() + "\n";


    return mostrar;
  }

  limpiar() {
    return "<hr><p><button onclick='limpiarPantalla()'>Limpiar Datos</button></p>";
  }

  toString() {
    let mostrar = "";
    mostrar += "<strong>" + this.nombre + "</strong><br>";
    mostrar += "Numero Plantas: " + this.numeroPlantas + "<br>";
    mostrar += "Superficie: " + this.superficie + "<br>";
    mostrar += " El tiempo para realizar la limpieza del edificio es: " + this.limpiarEdificio() + "<br>";
    mostrar += this.calcularCosteVigilancia() + "<br>";

    return mostrar;
  }

}

class Hotel extends Edificio {
  constructor(nombre, numeroPlantas, superficie, habitaciones) {
    super(nombre, numeroPlantas, superficie);
    this.habitaciones = habitaciones;
  }
  servicioHabitaciones() {
  
 
    let perServicio =Math.ceil(this.habitaciones / 20);
      
     console.log ("personas", perServicio);
    let sueldo = (perServicio * 1000);
      
     
    let mensaje1= "Se necesitan " + perServicio + " personas para atender el servicio de habitaciones.";
      
     
    let mensaje2="El total de los sueldos de estas personas es " + sueldo + " euros al mes.";
    return mensaje1 += mensaje2;
    }

  toJS() {
    let mostrar = "";
    mostrar += "Hotel\n";
    mostrar += super.toJS();
    mostrar += "Numero habitaciones: " + this.habitaciones + "\n";
    mostrar += "Serivicio habitacion: " + this.servicioHabitaciones() + "\n";

    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Hotel <br>";
    mostrar += super.toString();
    mostrar += "Numero habitaciones: " + this.habitaciones + "<br>";
    mostrar += "Serivicio habitacion: " + this.servicioHabitaciones() + "<br>";
    mostrar += super.limpiar();
    
    return mostrar;
  }

}

class Hospital extends Edificio {
  constructor(nombre, numeroPlantas, superficie, enfermos, numRaciones) {
    super(nombre, numeroPlantas, superficie);
    this.enfermos = enfermos;
    this.numRaciones = numRaciones;

  }
  getNumraciones() {
    return this.numRaciones;
  }
  setNumraciones(valor) {
    this.numRaciones = valor;
  }

  repartirAlmuerzo() {
    this.numRaciones = (this.enfermos * 3);

    return "Se están repartiendo " + this.numRaciones + "  raciones en este momento"
  }

  toJS() {
    let mostrar = "";
    mostrar += "Hospital\n";
    mostrar += super.toJS();
    mostrar += "Número de enfermos: " + this.enfermos + "\n";
    mostrar += "Número de almuerzos: " + this.repartirAlmuerzo() + "\n";
    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Hospital <br>";
    mostrar += super.toString();
    mostrar += "Número de enfermos: " + this.enfermos + "<br>";
    mostrar += "Número de almuerzos: " + this.repartirAlmuerzo() + "<br>";
    mostrar += super.limpiar();
    return mostrar;
  }

}

class Cine extends Edificio {
  constructor(nombre, numeroPlantas, superficie) {
    super(nombre, numeroPlantas, superficie);

  }

  proyectarSesion(numAsistentes, precioEntrada, aforoMaximo) {
    numAsistentes = 400;
    precioEntrada = 10;
    aforoMaximo = 500;
    let mensaje = "";
    if (numAsistentes > aforoMaximo) {

      mensaje = "No se puede superar el aforo máximo de la sala";
    } else {
      let recaudacion = numAsistentes * precioEntrada;


      mensaje = "Se han recaudado " + recaudacion.toFixed(2) + " euros";

    }
    return mensaje;


  }


  toJS() {
    let mostrar = "";
    mostrar += "Cine\n";
    mostrar += super.toJS() + "\n";
    mostrar += "Fondos: "+ this.proyectarSesion() + "\n";

    return mostrar;
  }

  toString() {
    let mostrar = "";
    mostrar += "Cine<br>";
    mostrar += super.toString() + "<br>";
    mostrar += "Fondos: "+ this.proyectarSesion() + "<br>";
    mostrar += super.limpiar();
    return mostrar;
  }

}