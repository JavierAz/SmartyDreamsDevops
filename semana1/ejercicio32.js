const cuadrado = (lista) => {
    let numeros = lista.filter(element => typeof element === "number")

    var res = numeros.map(function(x){
        return Math.pow(x,2);
    })

    return res;
}

console.log(cuadrado(['hola', 2,3,'Jav',9,10]))