
class Profesion {
    constructor (titulo, fechaGrad, universidad) {
        this.titulo=titulo;
        this.fechaGrad=fechaGrad;
        this.universidad=universidad;
    }  
}

class Persona {
    constructor (nombre, profesion, fnacimiento) {
    this.nombre=nombre; 
    this.profesion=profesion;
    this.fnacimiento=fnacimiento;
    this.equipos =[];
    }

    addEquipos(nombreEquipo) {
        this.equipos.push(nombreEquipo);
    }
}

let profesionAlonso= new Profesion ("Corredor","01-feb-2000","Universidad de Pilotos");
let persona2=[
    new Persona ("Fernando Alonso", profesionAlonso,"03-mar-1847"),
    new Persona ("Alexander Graham Bell", "Inventor del teléfono","03-mar-1847"),
    new Persona ("Oscar Moreno Peleteiro","whatever","11-ane-1973")
]

persona2[0].addEquipos("Minardi");
persona2[0].addEquipos("Renault");
persona2[0].addEquipos("McClaren");
persona2[0].addEquipos("Ferrari");
persona2[0].addEquipos("Alpine");
persona2[0].addEquipos("Aston Martin");
persona2[0].equipos.push("El que fiche luego");
console.log("Clase Persona =>", persona2);

const personas = [    

        {
            nombre: "Fernando Alonso",    
            profesion: "Correodr F1",
            fnacimiento: "03-mar-1847",     // personas[0].fnacimiento
            equipos: ["Minardi", "Renault", "McClaren", "Ferrari", "Alpine", "Aston Martin"]  // personas[0].equipos[1].

        },
        {
            nombre: "Alexander Graham Bell", 
            profesion: "Inventor del teléfono",
            fnacimiento: "03-mar-1847",
            equipos: [] 
        },
        {
            nombre: "Oscar Moreno Peleteiro",
            profesion: "¡buena pregunta!",      //personas[2].profesion
            fnacimiento: "11-ene-1973",
            equipos: []
        }
]

console.log("Objeto=>", personas);