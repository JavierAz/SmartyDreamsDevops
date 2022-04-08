const contadorLetras = (frase) => {
    let vocales = 0;
    let consonante = 0;
    let limpio = "";

    limpio = frase.split('').filter(l => /[áéíóú\w]/gi.test(l) && isNaN(l)).join('');

    for (const iterator of limpio) {
        if(/[aeiouáéíóú]/gi.test(iterator)){
            vocales++;
        } else {
            consonante++;
        }
    }

    return [consonante, vocales]
}

let text = contadorLetras("JASJSAD 12321 ./-")
console.log(`Consonantes: ${text[0]}, vocales: ${text[1]}`)