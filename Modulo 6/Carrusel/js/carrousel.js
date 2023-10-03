
let posicion=0;
document.getElementById("tema").innerHTML= vTema
        vizualizar();


        function avanzar() {

            if(posicion>= vIma.length - 1){
                posicion = 0;
            }else {
                posicion++;
            }
            vizualizar();
            
        }
        function atras() {
            if(posicion<=0){
                posicion = vIma.length -1;
            }else {
                posicion--;
            }
            vizualizar();
            
        }

        function vizualizar() {
            let vFoto= vRuta + vIma[posicion].imagen;
            let vNombre= vIma[posicion].nombre;
            let vTitulo= vIma[posicion].title;
            let vDesc= vIma[posicion].descripcion;

            document.getElementById("imagen").src= vFoto;
            document.getElementById("imagen").title= vTitulo;
            document.getElementById("imagen").alt= vIma[posicion].nombre;

            document.getElementById("nombreImagen").innerHTML= vNombre;
            document.getElementById("desc").innerHTML= vDesc;

        }