const palabra = "palabras";
const frase = "soy la FRASE, con 6 palabras y palabras.";

const palabraFrase = (frase, palabra) => {
    let resultado = 0;
    let limpio = frase.toLowerCase().replace(/[!,.]/gi, "");
    
    if(limpio.includes(palabra)){
        let palabras = limpio.split(' ');
        let mapa = {

        };

        for(let p of palabras){
            if(mapa[p]){
                mapa[p]++
            } else {
                mapa[p]=1;
            }
        }

        resultado = mapa[palabra]

    } else {
        resultado = 0;
    }
    return resultado;
    //console.log(limpio)
}

console.log("Coincidencias: ", palabraFrase(frase, palabra));
