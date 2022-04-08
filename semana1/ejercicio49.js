var prop = "aka";
var usuario = {
    nombre: "Javier",
    apellido: "Azanza",
    aka: "Javo"
};

const analisisPropiedad = (obj, propiedad) => {
    if(typeof obj === 'object' &&  typeof propiedad === "string" && hasOwnProperty.call(obj,propiedad)){
        return true;
    }else{
        return false;
    }
}

console.log("\n Propiedad: " +  prop);
console.log("\n Coincidencia: ", analisisPropiedad(usuario,prop))