const upper = (frase) => {
    let res = ""

    for(l in frase){
        if(frase[l-1] === " " || parseInt(l) === 0){
            res += frase[l].toUpperCase()
        } else {
            res += frase[l];
        }
    }

    return res;
}

console.log(upper("hola dante arces"))