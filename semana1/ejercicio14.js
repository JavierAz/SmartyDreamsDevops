const repeat = (frase, numero) => {
    let res="";

    for(let i=0;i<numero;i++){
        res+=frase+" ";
    }

    return res;
}

//console.log(repeat("hola",4))

//funcion prototipo
String.prototype.repiteme = function(numero){
    let res="";

    for(let i=0;i<numero;i++){
        res += this + " ";
    }

    return res;
}

console.log("Prueba el codigo".repiteme(5))