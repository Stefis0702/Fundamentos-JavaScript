class Persona{
    constructor(dni,nombre,apellido,edad){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.hobbies=[];
    }

    esMayordEdad(){
        if(this.edad<18){
            return false;
        }else{
           return true;
        }
    }

    agregarHobbie(hobbie){
        this.hobbies.push(hobbie);
    }

     toString(){
        let mostrar = "Datos:\n";
        mostrar+= "Dni:" + this.dni + "\n";
        mostrar+= "Nombre: " + this.nombre + "\n"; 
        mostrar+= "Apellido: " + this.apellido + "\n";
        mostrar+= "edad: " + this.edad + "\n";
        mostrar+= "Es mayor de edad?: " + this.esMayordEdad() + "\n";
        
         
        if (this.hobbies.length ==0) {
            mostrar += "Aún no se le han agregado hobbies";
          } else {
            mostrar += "Hobbies: "+ this.hobbies.join(", ");
    
          }
          return mostrar;
        
       
      
    }






}