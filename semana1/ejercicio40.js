const menorMayor = (list) => {
    let ordenar = list.sort((a,b)=>a-b)

    return {
        menor: list[0],
        mayor: list[list.length-1]
    }

}

console.log(menorMayor([1,2,4,9,5]))