var arr = [1,2,3,4,5,6,7,8,9,10];
console.log("\nResultado: " + arr);

function parImpar(numeros){
    return {
        p: numeros.filter(num => num%2 ===0),
        imp: numeros.filter(num => num%2 !== 0)
    }
}

console.log(parImpar(arr));