let listaClientes = [
  new Cliente("111A", "Vilma", "Picapiedra", "Cuernófono", "n/a"), //0
  new Cliente("222B", "Mickey", "Mouse", "650 00 00 00", "mickeymouse@disney.com"), //1
  new Cliente("333C", "Adelaide", "Bonfamille", "651 11 11 11", "pocahontas@disney.com"), //2
  new Cliente("444D", "Geppeto", "Collodi", "652 22 22 22", "gepetto@collodi.it"), //3
]

console.table(listaClientes);

listaClientes[0].agregarMascota(new Mascota(1,"Dino","perro","Prehistórico","M"));
console.log(listaClientes[0].toJS());

listaClientes[1].agregarMascota(new Mascota(11,"Pluto","perro","Sabueso","M"));
console.log(listaClientes[1].toJS());

listaClientes[2].agregarMascota(new Mascota(31,"Duquesa","gato","Angora","F"));
listaClientes[2].agregarMascota(new Mascota(32,"Marie","gato","Angora","F"));
listaClientes[2].agregarMascota(new Mascota(33,"Berlioz","gato","Europeo","M"));
console.log(listaClientes[2].toJS());

listaClientes[3].agregarMascota(new Mascota(41,"Fígaro","gato","Europeo","M"));
console.log(listaClientes[3].toJS());

function buscar(valor) {
  let indice = -1;
  let encontrado = false;
  let i=0;
  let vueltas = listaClientes.length;
  while (i<vueltas && !encontrado) {
    if (listaClientes[i].dni == valor) {
      indice=i;
      encontrado=true;
    }
    i++
  }
  return indice;
}


function agregarCliente(){

  let indice, vDni, vNombre, vApellido, vTelefono, vMail, mensaje;
  let nuevoCliente;

  vDni = prompt('Indica el número de DNI del nuevo cliente: ','444D');
  indice = buscar(vDni);

  if (indice >=0) {
    mensaje = "El cliente ya está registrado. Sus datos son:\n";
    mensaje += listaClientes[indice].toJS()
    alert(mensaje);

  } else {
    vNombre = prompt('Nombre del nuevo cliente','Jasmine');
    vApellido = prompt('Apellido del nuevo cliente','Aladdin');
    vTelefono = prompt('Telefono')
    vMail = prompt('Mail', 'jasmine@disney.com');

    nuevoCliente = new Cliente(vDni, vNombre, vApellido, vTelefono, vMail);
    
    listaClientes.push(nuevoCliente);    
    indice = listaClientes.length-1;

    alert("Cliente Registrado con éxito:\n" + listaClientes[indice].toJS());
    console.table(listaClientes);

  }

}

function modificarCliente(){

    let indice, vDni, vNombre, vApellido, vTelefono, vMail, mensaje;
    let clienteCambiar, confirmaCambios;
  
    vDni = prompt('Indica el DNI del cliente al cual desea modificar sus datos: ','111A');
    indice = buscar(vDni);

    if (indice<0) {
      alert("El cliente que desea no se encuentra registrado.");

    } else {
      clienteCambiar = listaClientes[indice];
      vNombre = clienteCambiar.nombre;
      vApellido = clienteCambiar.apellidos;
      vTelefono = clienteCambiar.telefono;
      vMail = clienteCambiar.mail;

      clienteCambiar.nombre = prompt("Cambie el nombre o enter para continuar", vNombre);
      clienteCambiar.apellido = prompt("Cambie el apellido o enter para continuar", vApellido);
      clienteCambiar.telefono = prompt("Cambie el telefono o enter para continuar", vTelefono); //deberían validar (do while)
      clienteCambiar.mail = prompt("Cambie mail o enter para continuar", vMail);

      mensaje = '¿Está de acuerdo con estos cambios?\n' + clienteCambiar.toJS();

      confirmaCambios = confirm(mensaje);
      if (confirmaCambios) {
        listaClientes.splice(indice, 1, clienteCambiar);
        alert('Cambios realizados');
      } else {
        alert('Los cambios han sido desechados');
      }
      console.table(listaClientes);
    }  
}

function eliminarCliente() {

    let indice, vDni, mensaje, confirmaEliminar;
  
    vDni = prompt('Indica el DNI del cliente que desea eliminar: ','333C');
    indice = buscar(vDni);

    if (indice<0) {
      alert("El cliente que desea no se encuentra registrado.");

    } else {

      mensaje = '¿Desea eliminar este cliente?\n' + listaClientes[indice].toJS();

      confirmaEliminar = confirm(mensaje);
      if (confirmaEliminar) {
        listaClientes.splice(indice, 1);
        alert('cliente eliminado');
      } else {
        alert('El cliente se mantiene registrado');
      }
      console.table(listaClientes);
    }
}

function mostrarCliente() {

  let indice, vDni;
  
  vDni = prompt('Indica el DNI del cliente a mostrar por pantalla: ','222B');
  indice = buscar(vDni);

  if (indice<0) {
    alert("El cliente que desea no se encuentra registrado.");
  } else {
    document.getElementById("datos").innerHTML = listaClientes[indice];
  }

}

function limpiarPantalla() {
  document.getElementById("datos").innerHTML ="";
}

function buscarMascota(valor){
  let indice = -1;
  let indiceMascota =-1;
  let encontrado = false;
  let i=0;

  let vueltas = listaClientes.length;
  while (i<vueltas && !encontrado) {
    indiceMascota = listaClientes[i].buscarMascota(valor);
    if (indiceMascota>=0) {
      indice = i;
      encontrado = true;
    }
    i++
  }
  return [indice, indiceMascota];

}

function incluirMascota() {
  let indice, indicesMascota, vDni, vChip, vNombre, vTipo, vRaza, vSexo, mensaje;
  let nuevaMascota;

  vDni = prompt('Indica el número de DNI del cliente responsable de la mascota: ','333C');
  indice = buscar(vDni);

  if (indice<0) {
    mensaje = "El cliente no está registrado. Agréguelo y luego registre la mascota.";

  } else {

    vChip = prompt('Indica el número de chip a registrar: ','34');
    indicesMascota = buscarMascota(vChip);
    if (indicesMascota[1] >=0) {
      mensaje = "El chip está registrado. Datos del cliente y mascotas:\n" + listaClientes[indicesMascota[0]].toJS();
      alert(mensaje);
    } else {
      vNombre = prompt('Nombre de la mascota a agregar','Touluse');
      vTipo = prompt('Tipo de mascota (gato | perro)','gato');
      vRaza = prompt('Raza', 'Chartreux')
      vSexo = prompt('Sexo (F o M)', 'M');
      nuevaMascota = new Mascota(vChip, vNombre, vTipo, vRaza, vSexo);
      listaClientes[indice].agregarMascota(nuevaMascota);
      mensaje = "La nueva mascota se ha registrado:\n" + listaClientes[indice].toJS();
      alert(mensaje);
    }
  }

}

function modificarMascota(){
  let indicesMascota, vChip, vNombre, vTipo, vRaza, vSexo, mensaje;
  let mascotaCambiar;
  vChip = prompt('Indica el número de chip de la mascota a modificar: ','33');

  indicesMascota = buscarMascota(vChip);
  if (indicesMascota[1] < 0) {
    alert("El chip solicitado no se encuentra registrado");
  } else {
    mascotaCambiar = listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]];
    console.log("Datos de mascota a cambiar: ", mascotaCambiar);
    vNombre = mascotaCambiar.nombre;
    vTipo = mascotaCambiar.tipo;
    vRaza = mascotaCambiar.raza;
    vSexo = mascotaCambiar.sexo;

    mascotaCambiar.nombre = prompt("Corrija el nombre de la mascota o enter para dejar igual", vNombre);
    mascotaCambiar.tipo = prompt("Corrija el tipo de la mascota o enter para dejar igual", vTipo);
    mascotaCambiar.raza = prompt("Corrija la raza de la mascota o enter para dejar igual", vRaza);
    mascotaCambiar.sexo = prompt("Corrija el sexo de la mascota o enter para dejar igual", vSexo);

    mensaje = '¿Está de acuerdo con estos cambios?\n' + mascotaCambiar;

    confirmaCambios = confirm(mensaje);
    if (confirmaCambios) {
      listaClientes[indicesMascota[0]].listaMascotas.splice([indicesMascota[1]], 1, mascotaCambiar);
      alert('Cambios realizados');
    } else {
      alert('Los cambios han sido desechados');
    }
    console.log(listaClientes[indicesMascota[0]].toJS());

  }

}

function esterilizar(){
  let indicesMascota, vChip;
  let mascotaEsterilizar;
  vChip = prompt('Indica el número de chip de la mascota a esterilizar: ','33');

  indicesMascota = buscarMascota(vChip);
  if (indicesMascota[1] < 0) {
    alert("El chip solicitado no se encuentra registrado");

  } else {
    mascotaEsterilizar = listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]];
    console.log("Datos de mascota a esterilizar: ", mascotaEsterilizar);
    mensaje = '¿Desea esterilizar esta mascota?\n' + mascotaEsterilizar;

    confirmaCambios = confirm(mensaje);
    if (confirmaCambios) {
      alert(listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]].esterilizarMascota());
      console.log(listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]]);
    } else {
      alert('Se ha anulado la operación');
    }

  }
}

function darBajaMascota(){
  let indicesMascota, vChip;
  let mascotaBaja;
  vChip = prompt('Indica el número de chip de la mascota a dar de baja: ','1');

  indicesMascota = buscarMascota(vChip);
  if (indicesMascota[1] < 0) {
    alert("El chip solicitado no se encuentra registrado");

  } else {
    mascotaBaja = listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]];
    console.log("Datos de mascota a dar de Baja: ", mascotaBaja);
    mensaje = '¿Desea dar de baja a esta mascota?\n' + mascotaBaja;

    confirmaCambios = confirm(mensaje);
    if (confirmaCambios) {
      alert(listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]].bajaMascota());
      console.log(listaClientes[indicesMascota[0]].listaMascotas[indicesMascota[1]]);
    } else {
      alert('Se ha anulado la operación');
    }

  }
}