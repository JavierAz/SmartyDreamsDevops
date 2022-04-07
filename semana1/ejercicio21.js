const recortar = (texto, fin) => {
    let res = "";

    if(typeof texto === 'string' && typeof fin === 'number'){
        res = texto.substring(0, fin);
    } else {
        res = "Introduce los datos correctamente!";
    }

    return res;
}

console.log(recortar("Javier Azanza Vega",9))