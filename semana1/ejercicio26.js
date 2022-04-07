const fibonacci = (numero) => {
    let fib = [0,1];

    for (let i = 2; i <= numero; i++) {
        fib.push(fib[i-1] + fib[i-2]);    
    }

    return [fib, fib[numero]]
}

console.log("serie: ", fibonacci(5)[0])
console.log("resultado: ", fibonacci(5)[1])
