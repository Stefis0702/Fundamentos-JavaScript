class Empleado {
  constructor (dni, nombre, apellido, sexo, fechaInicio, sueldo){
    this.dni = dni;
    this.nombre = nombre; 
    this.apellido = apellido;
    this.sexo = sexo;
    this.fechaInicio = fechaInicio;
    this.sueldo = sueldo;
  }

  toJS() {
      let mostrar="";
      mostrar += (this.nombre + " " + this.apellido).toUpperCase() + "\n";
      mostrar += "DNI Número: " + this.dni + "\n";
      mostrar += "Sexo: " + ((this.sexo == 'f') ? 'femenino' : 'masculino') + "\n";
      mostrar += "Fecha de Alta: " + this.fechaInicio + "\n";
      mostrar += "Sueldo: " + parseFloat(this.sueldo).toFixed(2) + "\n";
      return mostrar;
  }

  limpiar() {
    return "<hr><p><button onclick='limpiarPantalla()'>Limpiar Datos</button></p>";
  }

  toString() {
    let mostrar= "";
    mostrar += "<strong>" + (this.nombre + " " + this.apellido).toUpperCase() + "</strong><br>";
    mostrar += "DNI Número: " + this.dni + "<br>";
    mostrar += "Sexo: " + ((this.sexo == 'F') ? 'femenino' : 'masculino') + "<br>";
    mostrar += "Fecha de Alta: " + this.fechaInicio + "<br>";
    mostrar += "Sueldo: " + parseFloat(this.sueldo).toFixed(2) + "<br>";
    return mostrar;
  }

}

class Fijo extends Empleado {
  constructor (dni, nombre, apellido, sexo, fechaInicio, sueldo, tipo){
    super (dni, nombre, apellido, sexo, fechaInicio, sueldo);
    this.tipo = tipo;
  }

  toJS() {
    let mostrar="";
    mostrar += "Empleado Fijo\n";
    mostrar += super.toJS();
    mostrar += "Modalidad: " + this.tipo + "\n";
    return mostrar;
  }

  toString() {
    let mostrar="";
    mostrar += "Empleado Fijo<br>";
    mostrar += super.toString();
    mostrar += "Modalidad: " + this.tipo + "<br>";
    mostrar += super.limpiar();
    return mostrar;
  }

}

class Externo extends Empleado {
  constructor (dni, nombre, apellido, sexo, fechaInicio, sueldo, ett, comision){
    super (dni, nombre, apellido, sexo, fechaInicio, sueldo);
    this.ett = ett;
    this.comision = comision;
  }

  toJS() {
    let mostrar="";
    mostrar += "Empleado Externo\n";
    mostrar += super.toJS();
    mostrar += "Empresa ETT: " + this.ett + "\n";
    mostrar += "Comisión: " + this.comision + "\n";
    return mostrar;
  }
  
  toString() {
    let mostrar="";
    mostrar += "Empleado Externo<br>";
    mostrar += super.toString();
    mostrar += "Empresa ETT: " + this.ett + "<br>";
    mostrar += "Comisión: " + this.comision + "<br>";
    mostrar += super.limpiar();
    return mostrar;
  }

}

class Practica extends Empleado {
  constructor (dni, nombre, apellido, sexo, fechaInicio, sueldo, institucion, finContrato){
    super (dni, nombre, apellido, sexo, fechaInicio, sueldo);
    this.institucion = institucion;
    this.finContrato = finContrato;
  }

  toJS() {
    let mostrar="";
    mostrar += "Empleado en Prácticas\n";
    mostrar += super.toJS();
    mostrar += "Institución: " + this.institucion + "\n";
    mostrar += "Fin Contrato: " + this.finContrato + "\n";
    return mostrar;
  }
  
  toString() {
    let mostrar="";
    mostrar += "Empleado en Prácticas<br>";
    mostrar += super.toString();
    mostrar += "Institución: " + this.institucion + "<br>";
    mostrar += "Fin Contrato: " + this.finContrato  + "<br>";
    mostrar += super.limpiar();
    return mostrar;
  }

}