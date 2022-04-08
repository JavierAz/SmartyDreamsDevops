const palabras = (lista) => {
    let resultado = [];

    for (i of lista) {
        if(i.split(' ').length >= 2){
            resultado.push(i);
        }
    }

    return resultado;
}

console.log(palabras(['Jav Az','Hola','LO LA']))