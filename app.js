const { Console } = require('console')
const FS= require('fs')
const RUTA='./Archivos/datos.json'

const DB = FS.readFileSync(RUTA);
const cadena = JSON.parse(DB);

const [,,parametro0, 
        parametro1,
        parametro2,
        parametro3,
        parametro4]=process.argv;

const [,accion] = parametro0.split('=');

const [,actividad=""] = parametro1.split('=');
const [,categoria=""] = parametro2.split('=');
const [,valor=""] = parametro3.split('=');
const [,disponible=""] = parametro4.split('=');

switch(accion){
    case '1':
        //Escribir en un archivo
        EscribirJSON()
        break
    case '2':
        //Leer Archivos
        leerJSON()
        break
    case '3':
        //Actualizar en el archivo
        SobrescribirJSON();
        break
    case '4':
        //Eliminar archivo
        eliminarJSON()
    break
    default:
        console.log('Opcion incorrecta')
        break
}

function EscribirJSON(){

    let newCadena = {
        actividad: actividad,
        categoria: categoria,
        valor: valor,
        disponible: disponible
    };

    cadena.push(newCadena);

    //Convertir a cadena
    const cadenaJSON = JSON.stringify(cadena);
    
    FS.writeFileSync(RUTA, cadenaJSON, function (err) {
        if (err) throw err;
    });
    console.log('Se ingresaron los datos con exito');
}

function SobrescribirJSON(){
    FS.writeFileSync(RUTA, msj, function (err) {
        if (err) throw err;
        console.log('Archivo se actualizo con exito');
      });
}
function eliminarJSON(){
    FS.unlink(RUTA, function (err) {
        if (err) throw err;
        console.log('El archivo se elimino con exito');
      });
}

function leerJSON(){
    let Texto= FS.readFileSync(RUTA, function(err, data) {
         console.log(JSON.parse(data))
         
         this.data=JSON.parse(data)

         console.log(this.data.nombre)
       });
 }