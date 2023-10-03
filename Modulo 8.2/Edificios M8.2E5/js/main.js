let edificios = [
  new Hotel("AirBcn","8","4000","40"),
  new Hospital("Vall Hebron","8","4800","120"),
  new Cine("Filmoteca Cataluña", "3", "3200"),
]
console.table(edificios);


function buscar(valor) {
  let indice = -1;
  let encontrado = false;
  let i=0;
  let vueltas = edificios.length;
  while (i<vueltas && !encontrado) {
    if (edificios[i].nombre == valor) {
      indice=i;
      encontrado=true;
    }
    i++
  }
  return indice;
}


function agregar(){

  let indice, vNomb,vNombre,vPlantas, vSuperficie,vEnfermos,vHabitaciones, mensaje;
  let nuevoEdificio;

  vNomb = prompt('indica el nombre del nuevo edificio: ','Cinesa Maquinista');
  indice = buscar(vNomb);
  if (indice >=0) {
    mensaje = "El edificio ya está registrado. Sus datos son:\n";
    mensaje += edificios[indice].toJS()
    alert(mensaje);

  } else {
    do {
      vTipo = prompt('Indica el tipo del nuevo edificio: H=Hotel, S=Hospital, C=cine').toUpperCase();
    } while (!('HSC'.includes(vTipo))); //para validar el tipo

    vNombre = prompt('Nombre del nuevo Edificio: ','Cinesa Maquinista');
    vPlantas = prompt('Numero de plantas: ','2');
    vSuperficie = prompt('Cual es la superficie','1500');
    
    
    switch (vTipo) {
        case "H": 
          vHabitaciones = prompt('Cual es el numero de habitaciones', "13");
          nuevoEdificio = new Hotel(vNombre, vPlantas, vSuperficie, vHabitaciones);
        break;
        case "S":
          vEnfermos = prompt('Cuantos enfermos hay?: ','60');
          nuevoEdificio = new Hospital(vNombre, vPlantas, vSuperficie, vEnfermos);
        break;
      case "C":
        nuevoEdificio = new Cine(vNombre, vPlantas, vSuperficie);
        break;
    }   
    
    edificios.push(nuevoEdificio);    
    indice = edificios.length-1;

    alert("Edificio Registrado con éxito:\n" + edificios[indice].toJS());
    console.table(edificios);

  }

}

function modificar(){

    let indice, vNomb,vNombre,vPlantas, vSuperficie,vEnfermos,vHabitaciones, mensaje;
    let edificioCambiar, confirmaCambios;
  
    vNomb = prompt('Indica el nombre del edificio del que  desea modificar sus datos: ','Vall Hebron');
    indice = buscar(vNomb);

    if (indice<0) {
      alert("El edificio que desea no se encuentra registrado.");

    } else {
      edificioCambiar = edificios[indice];
      vNombre = edificioCambiar.nombre;
      vPlantas = edificioCambiar.numeroPlantas;
      vSuperficie = edificioCambiar.superficie;
      

      edificioCambiar.nombre = prompt("Cambie el nombre o enter para continuar", vNombre);
      edificioCambiar.numeroPlantas = prompt("Cambie el número de plantas o enter para continuar", vPlantas);
      edificioCambiar.superficie = prompt("Cambie la superficie o enter para continuar", vSuperficie);

      if (edificioCambiar instanceof Hotel) {
        vHabitaciones = edificioCambiar.habitaciones;
        edificioCambiar.habitaciones = prompt("Cambie el número de habitaciones o enter para continuar", vHabitaciones);        
      } else if (edificioCambiar instanceof Hospital) {
        vEnfermos = edificioCambiar.enfermos;
        edificioCambiar.enfermos = prompt("Cambie el número de enfermos o enter para continuar", vEnfermos); 
      } 

      mensaje = '¿Está de acuerdo con estos cambios?\n' + edificioCambiar.toJS();

      confirmaCambios = confirm(mensaje);
      if (confirmaCambios) {
        edificios.splice(indice, 1, edificioCambiar);
        alert('Cambios realizados');
      } else {
        alert('Los cambios han sido desechados');
      }
      console.table(edificios);
    }  
}

function eliminar() {

    let indice, vNomb, mensaje, confirmaEliminar;
  
    vNomb = prompt('Indica el nombre del edificio que desea eliminar: ','Cinesa Maquinista');
    indice = buscar(vNomb);

    if (indice<0) {
      alert("El edificio que desea no se encuentra registrado.");

    } else {

      mensaje = '¿Desea eliminar este edificio?\n' + edificios[indice].toJS();

      confirmaEliminar = confirm(mensaje);
      if (confirmaEliminar) {
        edificios.splice(indice, 1);
        alert('Edificio eliminado');
      } else {
        alert('El edificio se mantiene registrado');
      }
      console.table(edificios);
    }
}

function mostrar() {

  let indice, vNomb;
  
  vNomb = prompt('Indica el nombre del edificio a mostrar por pantalla: ','Vall Hebron');
  indice = buscar(vNomb);

  if (indice<0) {
    alert("El edificio que desea no se encuentra registrado.");
  } else {
    document.getElementById("datos").innerHTML = edificios[indice];
   
  }
 
}

function limpiarPantalla() {
  document.getElementById("datos").innerHTML ="";
}