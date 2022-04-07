const divisores = (numero, divisor) => {
    if(numero%divisor === 0){
        return divisor;
    }

    return 0;
}

const printDiv = (numero) => {
    for(let i = numero; i>=0; i--){
        if(divisores(numero,i) !== 0 ){
            console.log(i)
        }
    }
}

printDiv(20)