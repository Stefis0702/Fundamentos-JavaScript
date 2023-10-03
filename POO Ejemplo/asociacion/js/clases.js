class Cliente{
  constructor(dni, nombre, apellidos, telefono, mail) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.mail = mail;
    this.listaMascotas = []; 
  }

  // Ya vosotros sabéis hacer getters y setters

  agregarMascota(objetoMascota) {
    this.listaMascotas.push(objetoMascota);
  }

  buscarMascota(numChip) {
    let indice = -1;
    let encontrado = false;
    let i=0;
    let vueltas = this.listaMascotas.length;
    while (i<vueltas && !encontrado) {
      if (this.listaMascotas[i].chip == numChip) {
        indice=i;
        encontrado=true;
      }
      i++
    }
    return indice;
  }


  toJS() {
    let mostrar =  "\n";
    mostrar += (this.nombre + " " + this.apellidos).toUpperCase() + "\n";
    mostrar += "DNI Número: " + this.dni + "\n";
    mostrar += "Número de teléfono: " + this.telefono + "\n";
    mostrar += "email: " + this.mail + "\n";
    if (this.listaMascotas.length ==0) {
      mostrar += "Aún no se le han agregado mascotas";
    } else {
      mostrar += "MASCOTAS:\n"
      mostrar += this.listaMascotas.join("\n");
    }
    return mostrar;
  }

  toString() {
    let mostrar =  "<h2>DATOS DEL CLIENTE</h2>";
    mostrar += "<strong>" + (this.nombre + " " + this.apellidos).toUpperCase() + "</strong><br>";
    mostrar += "DNI Número: " + this.dni + "<br>";
    mostrar += "Número de teléfono: " + this.telefono + "<br>";
    mostrar += "email: " + this.mail + "<br>";
    if (this.listaMascotas.length ==0) {
      mostrar += "Aún no se le han agregado mascotas";
    } else {
      mostrar += "MASCOTAS:<br>"
      mostrar += this.listaMascotas.join("<br>");
    }
    mostrar += "<p><button onclick='limpiarPantalla()'>continuar</button></p>"
    return mostrar;
  }

}

class Mascota {
  constructor (chip, nombre, tipo, raza, sexo) {
    this.chip = chip;
    this.nombre = nombre;
    this.tipo = tipo;
    this.raza = raza;
    this.sexo = sexo;
    this.esterilizado = false;
    this.fechaBaja = null;
  }

  esterilizarMascota() {
    this.esterilizado = true;
    return this.nombre + " ha sido esterilizad" + ((this.sexo=='F') ?'a':'o');
  }

  bajaMascota() {
    let mensaje="";
    if (this.fechaBaja === null) {
      this.fechaBaja = new Date().toDateString();
      mensaje= this.nombre + " ha sido dado/a de baja\n";    
    } else {
      mensaje = 'La mascota ya ha sido dada de baja con anterioridad\n';
    }
    return mensaje + this.toString();
  }

  toString() {
    let mostrar = "";
    mostrar += `- ${this.nombre}, (chip ${this.chip}), ${this.tipo} ${this.raza} sexo `;
    mostrar += ((this.sexo=='F') ?'femenino':'masculino') + ", ";
    mostrar += ((this.esterilizado) ?'esterilizada, ':'');
    mostrar += ((this.fechaBaja != null) ? 'con fecha de baja ' + this.fechaBaja:'');
    return mostrar;
  } 


}