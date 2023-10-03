function buscar(){
    let valor = prompt("Que deseas buscar");
    let encontrado=false;
    let indice= -1;
    let i= 0
    let vueltas= vIma.length
    console.log(vueltas);

    while(i< vueltas && indice== -1){
        if(valor== vIma[i].nombre){
            indice= i;
           
        }
        i++;
    }
    return indice;
}


function agregar(){

    let vNombre= prompt("Indica el nombre de la imagen:");
    let vIndice= buscar(vNombre);

    if(vIndice===null){
        alert("Has cancelado agregar imagen");

        }else if (vIndice<0) {
        let vFoto= prompt("Indica el nombre de la imagen: ", " Nombre Imagen.jpg");
        let vTitulo= prompt("Indica el tip de la imagen ","Tip");
        let vDesc= prompt("Escribe una breve descripción","Aqui tu descripción");  

    const imagen2= new Imagen(vFoto, vNombre, vTitulo, vDesc)
    
     vIma.push(imagen2);
     let indice= vIma.length-1;

     vizualizar();


    }else{

        alert("La imagen ya existe");
       let indice= vIndice;
        vizualizar();
    }
}
function eliminar(){

    let vNombre= prompt("Indica el nombre de la imagen:");
    let vIndice= buscar(vNombre);
    console.log(buscar())

    if(vIndice==-1){
        alert("La imagen no existe");

    }else {
        padre = imagen.parentNode;
		padre.removeChild(imagen);

        vizualizar();
    }
       
    }

function modificar(){
    let vName= prompt("Indica el nombre de la imagen que deseas modificar:");
    let vIndice= buscar(vName);
    console.log(vName);
    console.log(vIndice);
    let posicion= vIndice;

    if (vIndice>=0){

    let vFoto= vIma[posicion].imagen;
    let vNombre= vIma[posicion].nombre;
    let vTitulo= vIma[posicion].title;
    let vDesc= vIma[posicion].descripcion;

    vFoto= prompt("Nueva imagen jpg para "+ vFoto + "(sin extensión): ", vFoto) + ".jpg";
    vTitulo= prompt("Nuevo titulo en la imagen para "+ vNombre, vTitulo);
    vDesc= prompt("Escrie una nueva descripcíon ", vDesc);

    let Imagen= {
        imagen:vFoto.toLocaleLowerCase(),
        nombre: vNombre,
        title: vTitulo,
        descripcion: vDesc,
    }
    vIma.splice(posicion, 1, Imagen);
    alert ("Imagen modificada con exito")

    vizualizar();
}
}
function terminar(){

    document.getElementById("menu").style.display="none";
    document.getElementById("atras").style.display="none";
    document.getElementById("avanza").style.display="none";
    
}