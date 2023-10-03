class Cliente{
    constructor (dni,nombre,apellido){
        this.dni=dni;
        this.nombre= nombre;
        this.apellido=apellido;
        this.cuentas=[];
    }

    getDni(){
        return this.dni;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    getCuentas(){
        return this.cuentas;
    }
    
    setDni(dni){
        this.dni= dni;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setApellido(apellido){
        this.apellido=apellido;
    }
    setCuentas(cuentas){
        this.cuentas=cuentas;
    }
    agregarCuenta(numCuenta){
        this.cuentas.push(numCuenta);
    }

    buscaCliente(numCuenta) {
        let indice = -1;
        let encontrado = false;
        let i=0;
        let vueltas = this.cuentas.length;
        while (i<vueltas && !encontrado) {
          if (this.cuentas[i].numero == numCuenta) {
            indice=i;
            encontrado=true;
          }
          i++
        }
        return indice;
      }
      


    
    
    buscarCuenta(valor){

        
        let encontrado= false;
        let indice=-1;
        let vueltas= this.cuentas.length;
        let i = 0;

        while(i< vueltas && !encontrado){
            if (this.cuentas[i].numero==valor){
                indice=i;
                encontrado= true;
                
            }
            i++
        }
        return indice;
    }
    
    toString(){
        let mostrar = "Datos del Cliente  \n";
        mostrar+= "Dni: " + this.dni + "\n";
        mostrar+= "Nombre: " + this.nombre + "\n"; 
        mostrar+= "Apellido: " + this.apellido + "\n"; 
         
        if (this.cuentas.length ==0) {
            mostrar += "Aún no se le han agregado cuentas";
          } else {
            mostrar += "Cuenta:\n"
            mostrar += this.cuentas.join("\n");
          }
          return mostrar;
        
       
      
    }
    toString2(){
        let mostrar = "Datos del Cliente  <br>";
        mostrar+= "Dni: " + this.dni + "<br>";
        mostrar+= "Nombre: " + this.nombre + "<br>"; 
        mostrar+= "Apellido: " + this.apellido + "<br>"; 
         
        if (this.cuentas.length ==0) {
            mostrar += "Aún no se le han agregado cuentas";
          } else {
            mostrar += "Cuenta: <br>"
            mostrar += this.cuentas.join("<br>");
          }
          return mostrar;
        
        return mostrar;
      
    }

    
}
class Cuenta{
    constructor (numero,){
        this.numero= numero;
        this.saldo= 0;
    }

    getNumero(){
        return this.numero;
    }
    getSaldo(){
        return this.saldo;
    }

    ingresarSaldo(valor){
        return this.saldo += parseFloat(valor);
    }
    retirarDinero(valor){
        if(this.saldo<valor){
            alert("No posee fondos suficientes")
        }else{
           return this.saldo -= parseFloat(valor);
        }
    }
   
    
   toString(){
   let mostrar = "";
   
    mostrar+= "Número: " + this.numero + "\n"; 
    mostrar+= "Saldo: " + this.saldo + "\n"; 
     
    return mostrar;
      
   }
    

   
    
}

