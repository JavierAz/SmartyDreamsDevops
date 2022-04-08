const extremos = (list) => {
    let numeros = []

    numeros.push(list[0],list[list.length-1])

    return numeros;
}

console.log(extremos([1,2,3,4]))