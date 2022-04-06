const impares = (inferior, superior) => {
    let resultado = 0;
    for(let i = inferior; i < superior; i++){
        if(!(i%2===0)){
            resultado+=1;
        }
    }
    return resultado;
}

console.log(impares(1,10))