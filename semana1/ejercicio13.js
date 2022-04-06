const dividirArray = (lista, division) => {
    let arrs = [];

    for(let i of lista){
        let arr_l = arrs[arrs.length - 1];

        if(!arr_l || arr_l.length === division){
            arrs.push([i])
        } else {
            arr_l.push(i)
        }
    }

    return arrs;
}

console.log(dividirArray([1,2,3,4,5,6,7],2))