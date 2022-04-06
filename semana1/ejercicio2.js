const palindromo = (palabra) => {
    let resultado = false;
    let pal = palabra.split('').reverse().join('');

    if(palabra===pal) resultado = true;

    return resultado;
}

console.log(palindromo('lANA'))