const permutacion = (secuencia, numero) => {
    for (let i = 0; i < numero; i++) {
        if(secuencia.indexOf(i+1) < 0){
            return false;
        }
        
    }
    return true
}

console.log(permutacion([1,3,4],4))
