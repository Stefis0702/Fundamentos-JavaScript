function f11(){
    console.log(agenda)
}

function f12(){
    console.clear();
    console.table(agenda[0].contactos[3]);
}
function f13(){
    console.clear();
    console.log(agenda[1]);
}

function buscar(valor){
    let encontrado=false;
    let indice= -1;
    let i= 0
    let vueltas=agenda.length;

    while(i< vueltas && !encontrado){
        if(valor== agenda[i].contactos){
            indice= i;
            encontrado = true;
        }
        i++;
    }
    return indice;
}

console.log(buscar(Bomberos))
function f21(){

    let vDato= prompt("Que deseas buscar?");
    let vIndice= buscar(vDato);
    console.log(buscar(vDato))

    if(vIndice==-1){
        alert("El dato no existe");

    }else {
        console.log(vIndice)
    }
       
    }