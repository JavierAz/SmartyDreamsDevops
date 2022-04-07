const masUsado = (texto) => {
    let letras = {

    };

    let max = 0;
    let letraMax = "";

    for(let l of texto){
        if(!letras[l]){
            letras[l] = 1;
        } else {
            letras[l]++;
        }
    }

    for(let l in letras){
        if(letras[l].toString().trim().length === 1 &&letras[l] > max){
            max = letras[l];
            letraMax = l;
        }
    }

    return letraMax;
}

console.log("la letra mas usada es: ",masUsado("Javier Azanza Vega"))