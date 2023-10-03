class Ordenador{
    constructor (marca, modelo, procesador, RAM,HDD){
        this.marca= marca;
        this.modelo=modelo;
        this.procesador=procesador;
        this.RAM=RAM;
        this.HDD=HDD;
    }

    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }
    getProcesador(){
        return this.procesador;
    }
    getRAM(){
        return this.RAM;
    }
    getHDD(){
        return this.HDD;
    }

    setProcesador(procesador){
        this.procesador= procesador;
    }
    setRAM(RAM){
        this.RAM=RAM;
    }
    setHDD(HDD){
        this.HDD=HDD;
    }


    seEjecuta(programa){
        return "En este momento se esta ejecutanto " + programa;
        
    }
    

    toString(){
        let descripcion = " DATOS " + "<br>" ;
        descripcion+= "La marca del ordenador es: " +"<b>" + this.marca +"</b>" + "." + "<br>";
        descripcion+= "El modelo del ordenador es: " +"<b>" + this.modelo +"</b>" + "." + "<br>";
        descripcion+= "El procesador del ordenador es: " +"<b>" + this.procesador +"</b>" + "." + "<br>";
        descripcion+= "La candidad de memoria RAM del ordenador es: " +"<b>" + this.RAM +"</b>" + "." + "<br>";
        descripcion+= "El disco duro del ordenador es; " +"<b>" + this.HDD +"</b>" + "." + "<br>";
        descripcion+= "<br>";
        return descripcion;
    }
    toString2(){
        let descripcion = " DATOS " + "\n" ;
        descripcion+= "La marca del ordenador es: " + this.marca + "." + "\n";
        descripcion+= "El modelo del ordenador es: " + this.modelo + "." + "\n";
        descripcion+= "El procesador del ordenador es: " + this.procesador + "." + "\n";
        descripcion+= "La candidad de memoria RAM del ordenador es: " + this.RAM + "." + "\n";
        descripcion+= "El disco duro del ordenador es; " + this.HDD + "." + "\n";
        descripcion+= "\n";
        return descripcion;
    }
}