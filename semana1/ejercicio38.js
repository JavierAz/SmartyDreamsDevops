const cuadrado = (numero) => {
    return Math.pow(numero, 2)
}

const pintar = (numero) => {
    for (let index = 1; index < numero; index++) {
        console.log(cuadrado(index))
        
    }
}

pintar(5);