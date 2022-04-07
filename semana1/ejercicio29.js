const capicua = (numero) => {
    let numeroStr = parseInt(numero.toString().split('').reverse().join(''));

    return numero === numeroStr
}

console.log(capicua(1021))