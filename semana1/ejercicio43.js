const prom = (data) => {
    let plus = data.reduce((acc, actual)=> {
        return acc+actual
    })

    return plus/data.length
}

console.log(prom([1,4,7,9]))