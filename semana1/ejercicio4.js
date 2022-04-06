const reversa = (palabra) => {
    let resultado = "";

    for(let p of palabra){
        resultado = p + resultado;
    }
    return resultado;
}

console.log(reversa("algo"));
