const bucles = (num) => {
    let arrNums = num.toString().split('');
    let bucles = 0;
    for(num of arrNums){
        num = parseInt(num);
        if(num === 0 || num === 6 || num === 9){
            bucles++;
        }else if(num === 8){
            bucles += 2;
        }
    }
    return bucles;
}

console.log("El número de bucles: ",bucles(2000));
