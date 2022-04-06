const stairs = (number) => {
    let stair="";

    for(let i=1;i<=number;i++){
        var steps="";

            for(let j=1;j<=i;j++){
                steps+="[-]";
            }
        stair+=steps+"\n"
    }
    return stair;
}

console.log(stairs(5));