const limpiar = (texto) => {
    return texto.replace(/[^\w]/gi, '').toLowerCase().split('').sort().join('')
}

const anagrama=(texto1, texto2)=>{
    return limpiar(texto1)===limpiar(texto2)
}

console.log(anagrama("riesgo", "Sergio"))