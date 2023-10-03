document.getElementById("b1").style.visibility = "hidden";
document.getElementById("b2").style.visibility = "hidden";
document.getElementById("b3").style.visibility = "hidden";
document.getElementById("b4").style.visibility = "hidden";


function crearOrdenador() {
    let marca, modelo, procesador, RAM, HDD;



    marca = prompt("Indroduce la marca del Ordenador", "HP");
    modelo = prompt("Indroduce el modelo del Ordenador", "PAVILON");
    procesador = prompt("Indroduce el procesador del Ordenador", "Ryzen 3");
    RAM = prompt("Indroduce la ram del Ordenador", "32 GB");
    HDD = prompt("Indroduce la cantidad del disco duro del Ordenador", "256 GB");
    vOrdenadores.push(new Ordenador(marca, modelo, procesador, RAM, HDD));
    marca = prompt("Indroduce la marca del Ordenador", "COMPAQ");
    modelo = prompt("Indroduce el modelo del Ordenador", "VELL");
    procesador = prompt("Indroduce el procesador del Ordenador", "Intel i5");
    RAM = prompt("Indroduce la ram del Ordenador", "64 GB");
    HDD = prompt("Indroduce la cantidad del disco duro del Ordenador", "500GB SSD");
    vOrdenadores.push(new Ordenador(marca, modelo, procesador, RAM, HDD));


    document.getElementById("respuesta1").innerHTML = "ORDENADOR # 1" + "<br>" + vOrdenadores[2] + "ORDENADOR # 2" + "<br>" + vOrdenadores[3];
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b2").style.visibility = "visible"; // show
    document.getElementById("b3").style.visibility = "visible";
    document.getElementById("b4").style.visibility = "visible";
}

function mostrarDatos() {
    let mostrar = parseInt(prompt("¿De que ordenador desear ver información? 1 o 2 "));
    let dato = parseInt(prompt("¿Que desear ver 1- marca 2- modelo 3- procesador 4- RAM 5-HDD "));

    if (mostrar == 1) {
        switch (dato) {
            case 1:
                alert(vOrdenadores[2].getMarca());
                break;
            case 2:
                alert(vOrdenadores[2].getModelo());
                break;
            case 3:
                alert(vOrdenadores[2].getProcesador());
                break;
            case 4:
                alert(vOrdenadores[2].getRAM());
                break;
            case 5:
                alert(vOrdenadores[2].getHDD());
                break;
        }

    } else if (mostrar == 2) {
        switch (dato) {
            case 1:
                alert(vOrdenadores[3].getMarca());
                break;
            case 2:
                alert(vOrdenadores[3].getModelo());
                break;
            case 3:
                alert(vOrdenadores[3].getProcesador());
                break;
            case 4:
                alert(vOrdenadores[3].getRAM());
                break;
            case 5:
                alert(vOrdenadores[3].getHDD());
                break;
        }

    } else {
        alert("la opcion no es correcta");
    }
}

function modificarDatos() {
    let mostrar = parseInt(prompt("¿De que ordenador desear modificar información? 1 o 2 "));
    let dato = parseInt(prompt("¿Que desear modificar 1- Procesador 2- RAM 3- HDD "));
    let nuevo = prompt("Indica el nuevo dato")

    if (mostrar == 1) {
        switch (dato) {
            case 1:
                vOrdenadores[2].setProcesador(nuevo);
                break;
            case 2:
                vOrdenadores[2].setRAM(nuevo);
                break;
            case 3:
                vOrdenadores[2].setHDD(nuevo);
                break;
            default:
                alert("no es una opción");
        }
        document.getElementById("respuesta1").innerHTML = "ORDENADOR # 1" + "<br>" + vOrdenadores[2] + "ORDENADOR # 2" + "<br>" + vOrdenadores[3];
    } else if (mostrar == 2) {
        switch (dato) {
            case 1:
                vOrdenadores[3].setProcesador(nuevo);
                break;
            case 2:
                vOrdenadores[3].setRAM(nuevo).txt.bold();
                break;
            case 3:
                vOrdenadores[3].setHDD(nuevo);
                break;
            default:
                alert("no es una opción");
        }
        document.getElementById("respuesta1").innerHTML = "ORDENADOR # 1" + "<br>" + vOrdenadores[2] + "ORDENADOR # 2" + "<br>" + vOrdenadores[3];
    } else {
        alert("la opcion no es correcta");
    }
}
function ejecutarPrograma(){

    let programa= prompt("¿Que explorador usas?");

    alert(vOrdenadores[0].seEjecuta(programa));

}
function alertaOrdenador(){
    let dato = parseInt(prompt("¿De que ordenador desear modificar información? 1 o 2 "));

    switch (dato) {
        case 1:
           alert("Ordenador 1" + "\n" + vOrdenadores[2].toString2());
            break;
        case 2:
            alert("Ordenador 2" + "\n" + vOrdenadores[3].toString2());
            break;
        
        default:
            alert("no es una opción");
    }
}