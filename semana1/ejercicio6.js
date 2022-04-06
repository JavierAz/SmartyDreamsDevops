const ladoSup = (numero) => {
    let lado = "";
    for (let i = 0; i<numero;i++){
        lado += '*';
    }
    return lado;
}

const cuadrado = (numero) => {
    let cuadro = ladoSup(numero)+"\n";

    let centro="";
    for(let i=0;i<numero-2;i++){
        centro="*";

        for(let j=0;j<numero-2;j++){
            centro+=" ";
        }

        centro+="*";

        cuadro+=centro+"\n";
    }

    cuadro += ladoSup(numero);

    return cuadro;
}

console.log(cuadrado(10))