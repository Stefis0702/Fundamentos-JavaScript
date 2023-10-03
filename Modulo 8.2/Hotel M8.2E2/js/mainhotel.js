document.getElementById("titulo").style.visibility = "hidden";
document.getElementById("contenedor").style.visibility = "hidden";
document.getElementById("titulo2").style.visibility = "hidden";
document.getElementById("su").style.visibility = "hidden";

let posicion;

function buscar(valor){
   

    let encontrado= false;
    let indice= -1;
    let i = 0;
    let posicion= vHotel.length;

            while (i < posicion && !encontrado) {
               
            if (valor==vHotel[i].nombre) {
                indice= i; 
                encontrado= true;
                }
                i++;
              }
               
              return indice;
        
}


function buscarhotel(){
    
    document.getElementById("contenedor").style.visibility = "visible";
    document.getElementById("titulo").style.visibility = "visible";

    
   let vBus= document.getElementById("busca").value;
   let indice= buscar(vBus);
   let posicion=indice;
   console.log(posicion)
   let currentHotel= "";
               
            if (indice>=0) {
                indice=posicion;
                currentHotel=vHotel[posicion];
                vHotel[posicion].toString();
                } else{
                    document.getElementById("titulo").innerHTML="el hotel no existe"
                }
        
        
        
}




function crearHotel() {
    document.getElementById("titulo").style.visibility = "hidden";
    
    
    
    let nombre,habitaciones,plantas, superficiet;

    nombre= document.getElementById("nombre").value;
    habitaciones=document.getElementById("habitaciones").value;
    plantas=document.getElementById("plantas").value;
    superficiet=document.getElementById("superficie").value;


    vHotel.push(new Hotel(nombre,habitaciones,plantas, superficiet));
    document.getElementById("titulo2").innerHTML="El Hotel se ha creado";
    
    console.log(vHotel)

}



function quitarHotel() {
    let vBus= document.getElementById("busca").value;
    let i = 0;
    let encontrado=false;
    let posicion=vHotel.length;

    while(i<posicion && !encontrado){
        if(vBus==vHotel[i].nombre){
            encontrado=true;
            vHotel.splice(i,1);
        }
        i++;
    }
    vHotel.toString();
}

function modificarHotel() {
    let vBus = document.getElementById("busca").value;
    let dato = parseInt(prompt("¿Que desear modificar 1- nombre  2- habitaciones 3- planta 4- superficie "));
    let nuevo = prompt("Indica el nuevo dato")
    let indice= buscar(vBus)

    switch (dato) {

        case 1: vHotel[indice].setNombre(nuevo);
        break;
        case 2: vHotel[indice].setHabitacion(nuevo);
        break;
        case 3: vHotel[indice].setPlanta(nuevo);
        break;
        case 4: vHotel[indice].setSuperficie(nuevo);
        break;
        default: "Error opcion Incorrecta";
        }
    vHotel.toString();
}

function salirPrograma(){
    document.getElementById("titulo").style.display = "none";
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("titulo2").style.display = "none";
    document.getElementById("su").style.display = "none";

    

}
