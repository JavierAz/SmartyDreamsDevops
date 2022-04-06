const censurado = (frase=false,palabra=false) =>{
    let resultado="";
    
    if(!frase && !palabra){
        resultado = "No se puede leer el texto ni la busqueda";
    } else if (!frase && palabra){
        resultado = "No tienes el texto";
    } else if(frase && !palabra){
        resultado = "No tienes la palabra a buscar";
    } else if(frase && palabra){
        resultado = frase.replace(new RegExp(palabra, 'gi'),"[CENSURADO]");
    }
    
    return resultado;
}

console.log(censurado("Hola Juan, Hola", "Hola"))
