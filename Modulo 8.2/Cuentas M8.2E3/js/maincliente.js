let posicion;
const vClientes = [new Cliente("2222", "Pepito", "Perez"), ];

console.table(vClientes);

vClientes[0].agregarCuenta(new Cuenta(2345));

console.log(vClientes[0].toString());



function buscar(valor) {


    let encontrado = false;
    let indice = -1;
    let i = 0;
    let vueltas = vClientes.length;

    while (i < vueltas && !encontrado) {
        if (vClientes[i].dni == valor) {
            indice = i;
            encontrado = true;
        }
        i++;
    }

    return indice;

}


function crearCliente() {

    let mensaje = "";
    let vDni = prompt("Ingrese el número de Dni del cliente", "Y2830431L");
    let indice = buscar(vDni);
    console.log("indice", indice);

    if (indice >= 0) {
        mensaje = "El cliente ya está registrado. Sus datos son: \n";
        mensaje += vClientes[indice].toString();
        alert(mensaje);

    } else {
        let nombre = prompt("Ingrese el nombre del cliente", "Stephanie");
        let apellido = prompt("Ingrese el apellido del cliente", "Lame");

        let nuevoCliente = new Cliente(vDni, nombre, apellido)

        vClientes.push(nuevoCliente);
        indice = vClientes.length - 1;

        alert("El Cliente se ha creado existosamente:\n" + vClientes[indice].toString());
        console.table(vClientes);

    }

}

function eliminarCliente() {

    let vDni = prompt("Ingresa el Dni del cliente", "Y2830431L");
    let indice = buscar(vDni);

    if (indice < 0) {
        alert("El cliente que desea no se encuentra registrado.");

    } else {
        let mensaje = "¿Desea eliminar este cliente?\n" + vClientes[indice].toString();
        let confirmaEliminar = confirm(mensaje);
        if (confirmaEliminar) {
            vClientes.splice(indice, 1);
            alert("el cliente ha sido eliminado")
        } else {
            alert("El cliente se mantiene registrado");
        }
        console.table(vClientes);

    }
}


function mostrarCliente() {

    let indice, vDni;
    
    vDni = prompt('Indica el DNI del cliente a mostrar por pantalla: ','2222');
    indice = buscar(vDni);
  
    if (indice<0) {
      alert("El cliente que desea no se encuentra registrado.");
    } else {
      document.getElementById("titulo2").innerHTML = vClientes[indice].toString2();
    }
  
  }
 function salir() {
    document.getElementById("titulo2").innerHTML ="";
  }

  function buscarCuen(valor) {

    let indice = -1;
    let indiceCuenta = -1;
    let encontrado = false;
    let i = 0;
    
    let vueltas=vClientes.length;
    while (i < vueltas && !encontrado) {
        indiceCuenta = vClientes[i].buscarCuenta(valor)
        console.log("indice buscar", indiceCuenta)
        if (indiceCuenta >= 0) {
            indice = i;
            encontrado = true;
        }
        i++
    }
    return [indice, indiceCuenta];
}

function crearCuenta() {


    let vDni = prompt("Ingresa el Dni del cliente", "Y2830431L")
    let indice = buscar(vDni);

    let varNumero, indiceCuenta, i, encontrado, mensaje;
    if (indice < 0) {
        mensaje = "El cliente no está registrado. Agréguelo y luego registre la cuenta.";
    } else {
        varNumero = Number(parseFloat(prompt("Introduce el numero de cuenta", "1111")));
        indiceCuenta= buscarCuen(varNumero);
        if (indiceCuenta[1] >=0) {
            mensaje = "La cuenta está registrada. Datos del cliente y cuenta:\n" + vClientes[indiceCuenta[0]].toString();
            alert(mensaje);
          } else {
            let cuentasOb = new Cuenta(varNumero);
        
            vClientes[indice].agregarCuenta(cuentasOb);

            mensaje="La nueva cuenta ha sido registrada:\n" + vClientes[indice].toString();
        }
    }console.table(vClientes);
}


function ingresarDinero() {
    let vDni = prompt("ingrese el numero de cuenta ", "2345");
    let indiceCuenta = buscarCuen(vDni);

    if (indiceCuenta[1] < 0) {
        
        alert("La cuenta no se encuentra registrada ");
    }else{
       let dineroIngresar=vClientes[indiceCuenta[0]].cuentas[indiceCuenta[1]];
       console.log("datos ingreso", dineroIngresar);
       let saldoNuevo= prompt("ingrese el monto a ingresar", "500")
       let mensaje= "¿Desea ingresar " + saldoNuevo+ " euros en esta cuenta?\n" + dineroIngresar ;
      
       let confirmaCambios= confirm(mensaje);
       if(confirmaCambios){
        alert("El nuevo saldo de la cuenta es " + vClientes[indiceCuenta[0]].cuentas[indiceCuenta[1]].ingresarSaldo(saldoNuevo)) + "euros";
       }else{
        alert("Se ha anulado la operación");
       }
    }console.table(vClientes);

}

function retirar() {

    let vDni = prompt("ingrese el numero de cuenta ", "2345");
    let indiceCuenta = buscarCuen(vDni);

    if (indiceCuenta[1] < 0) {
        
        alert("La cuenta no se encuentra registrada ");
    }else{
       let dineroRetirar=vClientes[indiceCuenta[0]].cuentas[indiceCuenta[1]];
       console.log("datos retiro", dineroRetirar);
       let saldoRetirar= prompt("ingrese el monto a retirar", "100")
       let mensaje= "¿Desea retirar " + saldoRetirar+ " euros en esta cuenta?\n" + dineroRetirar;
      
       let confirmaCambios= confirm(mensaje);
       if(confirmaCambios){
        alert("El nuevo saldo de la cuenta es " + vClientes[indiceCuenta[0]].cuentas[indiceCuenta[1]].retirarDinero(saldoRetirar)) + "euros";;
       }else{
        alert("Se ha anulado la operación");
       }
    }
}


