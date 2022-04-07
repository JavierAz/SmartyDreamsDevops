const replace = (number) => {
    let res = "";
    
    if(number%3===0 && number%5===0){
        res = "PisPas";
    } else if (number%3===0) {
        res = "Pis";
    } else if (number%5===0){
        res = "Pas";
    } else {
        return number;
    }

    return res;
}

const printNumbers = (number) => {
    for(let i=0;i<=number;i++){
        console.log(replace(i));
    }
}

printNumbers(30);