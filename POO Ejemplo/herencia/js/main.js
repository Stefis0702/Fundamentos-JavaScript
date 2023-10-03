let empleados = [
  new Fijo("111A","Pepito","Grillo","M","01-01-2020",1350,"Parcial"),
  new Externo("222B","Pedro","Picapiedra","M","10-01-2021",1500,"Adecco","0.07"),
  new Practica("333C", "Betty", "Mármol", "F", "15-12-2022",900,"IT Academy","30-6-2023"),
]
console.table(empleados);


function buscar(valor) {
  let indice = -1;
  let encontrado = false;
  let i=0;
  let vueltas = empleados.length;
  while (i<vueltas && !encontrado) {
    if (empleados[i].dni == valor) {
      indice=i;
      encontrado=true;
    }
    i++
  }
  return indice;
}


function agregar(){

  let indice, vDni, vTipo, vNombre, vApellido, vSexo, vAlta, vSueldo, vModalidad, vEtt, vComision, vInstitucion, vFechaFin, mensaje;
  let nuevoEmpleado;

  vDni = prompt('Indica el número de DNI del nuevo Empleado: ','444D');
  indice = buscar(vDni);
  if (indice >=0) {
    mensaje = "El empleado ya está registrado. Sus datos son:\n";
    mensaje += empleados[indice].toJS()
    alert(mensaje);

  } else {
    do {
      vTipo = prompt('Indica el tipo del nuevo empleado: F=Fijo, E=Externo, P=en Prácticas', 'F').toUpperCase();
    } while (!('FEP'.includes(vTipo))); //para validar el tipo

    vNombre = prompt('Nombre del nuevo Empleado','Tiroloco');
    vApellido = prompt('Apellido del nuevo Empleado','McGrow');
    vSexo = prompt('Sexo. F=Femenino, M=Masculino','M').toUpperCase(); // Ya sabeis cómo validar...
    vAlta = prompt('Fecha de alta', '5-12-2022');
    vSueldo = parseInt(prompt('Sueldo',2000));
    
    if (vTipo='F') {
      vModalidad = prompt('Modalidad. Tiempo Completo, Parcial, Discontinuo','Tiempo Completo');
      nuevoEmpleado = new Fijo(vDni, vNombre, vApellido, vSexo, vAlta, vSueldo, vModalidad);
    } else if (vTipo='E') {
      vEtt = prompt('Empresa ETT','Randstad');
      vComision = prompt('Comisión ETT','0.08')
      nuevoEmpleado = new Externo(vDni, vNombre, vApellido, vSexo, vAlta, vSueldo, vEtt, vComision);
    } else {
      vInstitucion = prompt('Institución','EAE');
      vFechaFin = prompt('Fin contrato:','30-7-2023')
      nuevoEmpleado = new Practica(vDni, vNombre, vApellido, vSexo, vAlta, vSueldo, vInstitucion, vFechaFin);      
    }    
    
    empleados.push(nuevoEmpleado);    
    indice = empleados.length-1;

    alert("Empleado Registrado con éxito:\n" + empleados[indice].toJS());
    console.table(empleados);

  }

}

function modificar(){

    let indice, vDni, vTipo, vNombre, vApellido, vSexo, vAlta, vSueldo, vModalidad, vEtt, vComision, vInstitucion, vFechaFin, mensaje;
    let empleadoCambiar, confirmaCambios;
  
    vDni = prompt('Indica el DNI del Empleado al cual desea modificar sus datos: ','111A');
    indice = buscar(vDni);

    if (indice<0) {
      alert("El empleado que desea no se encuentra registrado.");

    } else {
      empleadoCambiar = empleados[indice];
      vNombre = empleadoCambiar.nombre;
      vApellido = empleadoCambiar.apellido;
      vSexo = empleadoCambiar.sexo;
      vAlta = empleadoCambiar.fechaInicio;
      vSueldo = empleadoCambiar.sueldo;

      empleadoCambiar.nombre = prompt("Cambie el nombre o enter para continuar", vNombre);
      empleadoCambiar.apellido = prompt("Cambie el apellido o enter para continuar", vApellido);
      empleadoCambiar.sexo = prompt("Cambie el sexo F/M o enter para continuar", vSexo); //deberían validar (do while)
      empleadoCambiar.fechaInicio = prompt("Cambie Fecha Inicio o enter para continuar", vAlta);
      empleadoCambiar.sueldo = prompt("Cambie el sueldo o enter para continuar", vSueldo);

      if (empleadoCambiar instanceof Fijo) {
        vModalidad = empleadoCambiar.tipo;
        empleadoCambiar.tipo = prompt("Cambie la modalidad de contrato (Tiempo Completo, Parcial, Discontinuo) o enter para continuar", vTipo);        
      } else if (empleadoCambiar instanceof Externo) {
        vEtt = empleadoCambiar.ett;
        vComision = empleadoCambiar.comision;
        empleadoCambiar.ett = prompt("Cambie empresa ETT o enter para continuar", vEtt); 
        empleadoCambiar.comision = prompt("Cambie comision a ETT o enter para continuar", vComision); 
      } else {
        vInstitucion = empleadoCambiar.institucion;
        vFechaFin = empleadoCambiar.finContrato;
        empleadoCambiar.institucion = prompt("Cambie institución educativa o enter para continuar", vInstitucion);
        empleadoCambiar.finContrato = prompt("Cambie fin contrato o enter para continuar", vFechaFin);  
      }

      mensaje = '¿Está de acuerdo con estos cambios?\n' + empleadoCambiar.toJS();

      confirmaCambios = confirm(mensaje);
      if (confirmaCambios) {
        empleados.splice(indice, 1, empleadoCambiar);
        alert('Cambios realizados');
      } else {
        alert('Los cambios han sido desechados');
      }
      console.table(empleados);
    }  
}

function eliminar() {

    let indice, vDni, mensaje, confirmaEliminar;
  
    vDni = prompt('Indica el DNI del Empleado que desea eliminar: ','222B');
    indice = buscar(vDni);

    if (indice<0) {
      alert("El empleado que desea no se encuentra registrado.");

    } else {

      mensaje = '¿Desea eliminar este empleado?\n' + empleados[indice].toJS();

      confirmaEliminar = confirm(mensaje);
      if (confirmaEliminar) {
        empleados.splice(indice, 1);
        alert('Empleado eliminado');
      } else {
        alert('El empleado se mantiene registrado');
      }
      console.table(empleados);
    }
}

function mostrar() {

  let indice, vDni;
  
  vDni = prompt('Indica el DNI del Empleado a mostrar por pantalla: ','333C');
  indice = buscar(vDni);

  if (indice<0) {
    alert("El empleado que desea no se encuentra registrado.");
  } else {
    document.getElementById("datos").innerHTML = empleados[indice];
  }

}

function limpiarPantalla() {
  document.getElementById("datos").innerHTML ="";
}