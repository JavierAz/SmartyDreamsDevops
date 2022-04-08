const angulo = (numero) => {
    let res = "Esto es un angulo ";

    if(numero < 90){
        res += "Agudo"
    } else if (numero === 90) {
        res += "Recto"
    } else if(numero > 90 && numero < 180){
        res += "Obtuso"
    } else if(numero === 180){
        res += "Llano"
    } else if (numero > 180 && numero < 360){
        res += "Concavo"
    } else {
        res += "Completo"
    }

    return res;
}

console.log(angulo(90))