class Hotel{
    constructor (nombre,habitaciones,plantas, superficiet){
        this.nombre= nombre;
        this.habitaciones=habitaciones;
        this.plantas=plantas;
        this.superficiet=superficiet
    }

    getNombre(){
        return this.nombre;
    }
    getHabitaciones(){
        return this.habitaciones;
    }
    getPlantas(){
        return this.plantas;
    }
    getSuperficie(){
        return this.superficiet;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    
    setHabitacion(habitaciones){
        this.habitaciones= habitaciones;
    }
    setPlanta(plantas){
        this.plantas=plantas;
    }
    setSuperficie(superficiet){
        this.superficiet=superficiet;
    }


    calcularMantenimiento(x){
        let mantenimiento= (x / 20);
        let valor= (mantenimiento * 1500);
        return "El mantenimiento de este hotel deben realizarlo " + mantenimiento + "personas" + "y costaria "+ valor;
        
    }
    

    toString(){
        
        

        document.getElementById("nombre").value=this.nombre;
        document.getElementById("habitaciones").value= this.habitaciones;
        document.getElementById("plantas").value= this.plantas;
        document.getElementById("superficie").value= this.superficiet;
        
      
    }
    
}
