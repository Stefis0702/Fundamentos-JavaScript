class Imagen {

// const imagen2 = new Imagen (varImagen, varNombre, varTitle, varDescripcion);
// para crear una imagen nueva (desde el resto de js)

   constructor(imagen, nombre, title, descripcion) {
      this.imagen = imagen; 
      this.nombre = nombre;
      this.title = title;
      this.descripcion = descripcion;
   }

   inicialNombreImagen () {
      let inicial= this.nombre[0];
      return inicial;
   }

   letraXenDesc(posicion) {
      let mensaje;
      if (posicion < 0 || posicion > this.descripcion.length) {
         mensaje = "Error: posición fuera de rango";
      } else {
         mensaje = "La letra en la posicion " + posicion + " es la letra " + this.descripcion[posicion];
      }
      return mensaje;
   }

   mostrarJS() {
      let mostrar = "DATOS DE LA IMAGEN\n";
      mostrar += "El nombre de la imagen es "  + this.nombre + "\n";
      mostrar += "Se encuentra en el archivo " + this.imagen + "\n";
      mostrar += "El caption es  " + this.title + "\n";
      mostrar += "Su descripción:  " + this.descripcion;
      return mostrar;
   }

   toString() {      
      let mostrar = "DATOS DE LA IMAGEN<br>";
      mostrar += "El nombre de la imagen es "  + this.nombre + "<br>";
      mostrar += "Se encuentra en el archivo " + this.imagen + "<br>";
      mostrar += "El caption es  " + this.title + "<br>";
      mostrar += "Su descripción:  " + this.descripcion;
      return mostrar;
   }

}
