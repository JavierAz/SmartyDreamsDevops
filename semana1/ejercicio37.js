const repetido = (list) => {
    let map = {

    }
    let frecuente = "";
    let mayor = 0;

    if(typeof list === "string"){
        list.split(" ")
    }

    for (const iterator of list) {
        if(map[iterator]){
            map[iterator]++
        } else {
            map[iterator] = 1;
        }
        
    }

    for (const key in map) {
        if(map[key]>mayor){
            frecuente=key
            mayor=map[key];
        }
    }

    return [mayor, frecuente]

}

let text = repetido("Javier Azanza Vega")
console.log(`Caracter mas frecuente: ${text[1]}, cantidad de apariciones ${text[0]}`)