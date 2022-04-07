let numero = 6;

const fact = (numero) => {
    let res = 1;

    for (let index = numero; index >= 2; index--) {
        res *= index;
    }

    return res;
}

console.log(`${numero}! = `, fact(numero))