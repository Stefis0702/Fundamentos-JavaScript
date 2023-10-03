const vPersonas=[
    new Persona("14551581X","David","Martinez","25"),
    new Persona("25696433M","Hanna","Castaño","16"),
    new Persona("79399824Y","Sophia","Martinez","40"),

]
//console.table("personas",vPersonas);

vPersonas[0].agregarHobbie("Leer");
vPersonas[0].agregarHobbie("Correr");



function p1(){

    let suma= 0
    let multiplicacion= 1
    
    let arrayNumber= [8, 9, 5, 2, 1, 4, 6, 1, 2, 3];

    for(let i = 0; i < arrayNumber.length; i++){
        let numero= arrayNumber[i];
        
        if(numero%3===0){
            multiplicacion*=numero;
            suma+=numero;
            
        }
        
       // console.log("suma",suma);
       // console.log("multiplicacion",multiplicacion)
        document.getElementById("suma").innerHTML= suma;
        document.getElementById("multiplica").innerHTML= multiplicacion;
    }
    
}

function p2d(){

    console.log("Persona2\n"+ vPersonas[1].toString());
}



function p2e(){

    alert("Persona1\n"+ vPersonas[0].toString());
}

